import React, { useState } from 'react';
import '../styles.scss';
import '../../node_modules/video-react/dist/video-react.css';

import { Helmet } from 'react-helmet';

import Ar from '../components/ar';
import Header from '../components/header';
import Footer from '../components/footer';

import Overlay from '../components/overlay';
import Video from '../components/video';
import Focus from '../components/focus';

const IndexPage = () => {
  const [currentMarker, setCurrentMarker] = useState(null);

  const handleVideoClose = () => {
    setCurrentMarker(null);
  };

  const onMarkerChange = (marker) => {
    if (currentMarker === marker) return;
    setCurrentMarker(marker);
  }

  return (
    <>
      <Helmet>
        <title>Ar Slanted</title>
      </Helmet>

      <Header />

      <Ar
        onMarkerChange={onMarkerChange}
        currentMarker={currentMarker}
      />

      <Overlay grey={!!currentMarker}>
        {currentMarker && (
          <Video
            videoName={currentMarker.videoName}
            handleVideoClose={handleVideoClose}
            description={currentMarker.videoDescription}
            author={currentMarker.author}
          />
        )}
        {!currentMarker && <Focus />}
      </Overlay>

      <Footer />
    </>
  );
};

export default IndexPage;
