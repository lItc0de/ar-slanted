import ArWorker from '../workers/ar.worker';

const asyncTimeout = (timeout) => new Promise((resolve, reject) => {
  setTimeout(resolve, timeout);
})

class WorkerController {
  constructor(markers, webcam, markerFoundCallback) {
    this.markers = markers;
    this.workers = [];
    this.webcam = webcam;
    this.markerFoundCallback = markerFoundCallback;
    this.shouldStopProcess = false;
    this.loadingBatchSize = 5;

    this.width = 640;
    this.height = 480;

    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context_process = canvas.getContext('2d');
  }

  async startTracking() {
    await this.initWorkers();
    console.log('finish!!!!!!!!!')
    this.process();
  }

  handleMarkerFound(marker) {
    this.stopProcess();
    this.markerFoundCallback(marker)
  }

  async initWorkers() {
    const markerCount = this.markers.length

    console.log({ markerCount });

    for (let i = 0; i < markerCount; i += this.loadingBatchSize) {
      console.log({ i });
      await Promise.all(
        this.markers
          .slice(i, i + this.loadingBatchSize)
          .map(this.initWorker.bind(this))
      );
    }
  }

  stopProcess() {
    this.shouldStopProcess = true;
  }

  async process() {
    console.log('process called');

    if (this.shouldStopProcess) {
      this.shouldStopProcess = false;
      return;
    }

    this.context_process.fillStyle = 'black';
    this.context_process.fillRect(0, 0, this.width, this.height);
    this.context_process.drawImage(
      this.webcam.current,
      0,
      0,
      this.width,
      this.height
    );
    const imageData = this.context_process.getImageData(
      0,
      0,
      this.width,
      this.height
    );

    await this.workers.reduce(async (prev, worker) => {
      await prev;
      worker.process(imageData);
      return await asyncTimeout(2000 / this.workers.length);
    }, undefined);

    this.process();
  }

  handleMessage({ data }) {
    if (data.type === 'markerFound') this.handleMarkerFound(data.payload);
  }

  async initWorker(marker) {
    const worker = typeof window === 'object' && new ArWorker();
    worker.addEventListener('message', this.handleMessage.bind(this), false);
    await worker.init(marker, this.width, this.height);
    this.workers.push(worker);
  }
}

export default WorkerController;
