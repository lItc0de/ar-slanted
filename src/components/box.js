import React, { Component, useRef } from 'react';
import { useFrame } from 'react-three-fiber'


class Test extends Component {
  state = {
    active: false,
    hovered: false
  }

  setActive(active) {
    this.setState({ active })
  }

  setHover(hovered) {
    this.setState({ hovered })
  }

  render() {
    const mesh = useRef()

    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return (
      <mesh
        {...this.props}
        ref={mesh}
        scale={this.active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(event) => this.setActive(!this.active)}
        onPointerOver={(event) => this.setHover(true)}
        onPointerOut={(event) => this.setHover(false)}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={this.hovered ? 'hotpink' : 'orange'} />
      </mesh>
    );
  }
}

export default Test;
