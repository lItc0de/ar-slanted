import React, { Component } from 'react';

class Ar extends Component {
  state = {
    showVideo: false,
    showMarker: false
  };

  componentDidMount() {
    this.addAframeListeners();
    this.setState({ showMarker: true });
  }

  addAframeListeners() {
    const _this = this;

    window.AFRAME.registerComponent('markerhandler', {
      init: function () {
        alert('update called');

        this.el.sceneEl.addEventListener('markerFound', () => {
          alert('marker found');
          _this.setState({ showVideo: true });
        });

        this.el.sceneEl.addEventListener('markerLost', () => {
          alert('marker lost');
          _this.setState({ showVideo: false });
        });
      },
    });
  }

  render() {
    return (
      <>
        <a-scene
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
        >
          { this.showMarker && <a-nft
            type="nft"
            markerhandler
            url="/descriptors/917557_902068733248100_1679244782_n"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          ></a-nft> }
          <a-entity camera></a-entity>
        </a-scene>
        { this.state.showVideo && <h1 class="test">Helllo :)</h1> }
      </>
    );
  }
}

export default Ar;
