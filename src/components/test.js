import React, { Component } from 'react';
import { Canvas, } from 'react-three-fiber'


class Test extends Component {
  render() {
    return (
      <Canvas camera>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    );
  }
}

export default Test;
