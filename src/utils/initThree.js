/* globals THREE, THREEx */

const initThree = (markers) => {
  THREEx.ArToolkitContext.baseURL = '../';

  // const renderer = new THREE.WebGLRenderer({
  //   antialias: true,
  //   alpha: true,
  //   precision: 'mediump',
  // });

  // renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setClearColor(new THREE.Color('lightgrey'), 0);
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.domElement.style.position = 'absolute';
  // renderer.domElement.style.top = '0px';
  // renderer.domElement.style.left = '0px';
  // document
  //   .getElementById('gatsby-focus-wrapper')
  //   .appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  scene.add(camera);

  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  const arToolkitSource = new THREEx.ArToolkitSource({
    sourceType: 'webcam',
    sourceWidth: 480,
    sourceHeight: 640,
  });

  const arToolkitContext = new THREEx.ArToolkitContext(
    {
      detectionMode: 'mono',
      canvasWidth: 480,
      canvasHeight: 640,
      cameraParametersUrl: '/data/camera_para.dat'
    },
    {
      sourceWidth: 480,
      sourceHeight: 640,
    }
  );

  arToolkitContext.init(() => {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
  });

  const onResize = () => {
    arToolkitSource.onResizeElement();
    // arToolkitSource.copyElementSizeTo(renderer.domElement);
    // if (arToolkitContext.arController !== null) {
    //   arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
    // }
  };

  arToolkitSource.init(() => {
    setTimeout(() => onResize, 1000);
  });

  window.addEventListener('resize', onResize);

  const markerControls = new THREEx.ArMarkerControls(arToolkitContext, camera, {
    type: 'nft',
    descriptorsUrl: `https://litc0de.github.io/ar-slanted/markers/${markers[0].markerName}`,
    changeMatrixMode: 'cameraTransformMatrix',
  });

  scene.visible = false;

  var root = new THREE.Object3D();
  scene.add(root);

  // window.addEventListener('arjs-nft-loaded', (ev) => {
  //   console.log(ev);
  // });

  // const clock = new THREE.Clock();
  // const mixers = [];
};

export default initThree;
