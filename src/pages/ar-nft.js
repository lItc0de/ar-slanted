import React, { useEffect } from 'react';
import { ARnft } from '@kalwalt/ar-nft';
import * as THREE from 'three';
import '../ar-nft-styles.scss';

const ArNft = () => {
  useEffect(() => {
    ARnft.init(640, 480, 'markers/digitalls_marker', '/data/config.json', true)
      .then((nft) => {
        let mat = new THREE.MeshLambertMaterial({ color: 0xff0000 });
        let boxGeom = new THREE.BoxGeometry(1, 1, 1);
        let cube = new THREE.Mesh(boxGeom, mat);
        cube.position.z = 90;
        cube.scale.set(180, 180, 180);

        nft.add(cube);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div></div>;
};

export default ArNft;
