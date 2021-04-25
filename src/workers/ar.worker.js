/* globals slef */

import { ARControllerNFT } from '@kalwalt/jsartoolkit-nft';

class MarkerTracker {
  constructor(marker, width, height) {
    this.marker = marker;
    this.markerUrl = `https://downloads.slanted.de/Slanted-Magazine/AI/${marker.markerName}`;
    // this.onMarkerFound = onMarkerFound;
    this.ar = null;
    this.width = width;
    this.height = height;
  }

  async init() {
    const { marker } = this;
    try {
      this.ar = await ARControllerNFT.initWithDimensions(this.width, this.height, 'data/camera_para.dat');

      this.ar.addEventListener('getNFTMarker', () => {
        global.self.postMessage({ type: 'markerFound', payload: marker });
        console.log('lol');
      });

      const nftMarker = await this.ar.loadNFTMarker(this.markerUrl);
      this.ar.trackNFTMarkerId(nftMarker.id, nftMarker.width);
    } catch {
      console.log('init error');
    }
  }

  process(imageData) {
    if (!this.ar) return;
    this.ar.process(imageData);
  };
}

let markerTracker;

export const init = async (...args) => {
  markerTracker = new MarkerTracker(...args);
  return markerTracker.init();
}

export const process = (imageData) => {
  markerTracker.process(imageData);
}
