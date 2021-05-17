import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import chapters from '../../data/markers.json';
import Layout from '../../components/layout';
import Ar from '../../components/ar';
import Header from '../../components/header';

import Overlay from '../../components/overlay';
import Video from '../../components/video';
import Focus from '../../components/focus';

import '../../../node_modules/video-react/dist/video-react.css';

const ArChapterPage = ({ chapterNumber }) => {
  const [currentMarker, setCurrentMarker] = useState(null);
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    setChapter(
      chapters.find((chapter) => chapter.number === Number(chapterNumber))
    );
    console.log({ chapterNumber });
  }, [chapterNumber]);

  const handleVideoClose = () => {
    setCurrentMarker(null);
  };

  const onMarkerChange = (marker) => {
    if (currentMarker === marker) return;
    setCurrentMarker(marker);
  };

  return (
    <>
      <Helmet>
        <title>Ar Slanted</title>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
      </Helmet>

      <Layout ar>
        {chapter && <Header chapter={chapter.title} />}

        {chapter && (
          <Ar
            onMarkerChange={onMarkerChange}
            currentMarker={currentMarker}
            markers={chapter.markers}
          />
        )}
      </Layout>

      <Overlay grey={!!currentMarker} show={!!currentMarker}>
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
    </>
  );
};

export default ArChapterPage;
