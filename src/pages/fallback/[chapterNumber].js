import React, { useState, useEffect } from 'react';

import Overlay from '../../components/overlay';
import Video from '../../components/video';
import Layout from '../../components/layout';

import * as chapterStyles from './chapters.module.scss';
import chapters from '../../data/markers.json';

const VideosPage = ({ chapterNumber }) => {
  const [chapter, setChapter] = useState(null);
  const [currentMarker, setCurrentMarker] = useState(null);

  useEffect(() => {
    setChapter(
      chapters.find((chapter) => chapter.number === Number(chapterNumber))
    );
  }, [chapterNumber]);

  const handleVideoClose = () => {
    setCurrentMarker(null);
  };

  return (
    <>
      <Layout>
        <h3>ai — choose video</h3>

        <ul className={chapterStyles.menu}>
          {chapter &&
            chapter.markers.map((marker, i) => {
              return (
                <li
                  className={chapterStyles.menuItem}
                  key={`${marker.videoName}-${i}`}
                  onClick={() => setCurrentMarker(marker)}
                >{`${marker.author} - ${marker.videoDescription}`}</li>
              );
            })}
        </ul>
      </Layout>

      {currentMarker && (
        <Overlay grey>
          <Video
            videoName={currentMarker.videoName}
            handleVideoClose={handleVideoClose}
            description={currentMarker.videoDescription}
            author={currentMarker.author}
          />
        </Overlay>
      )}
    </>
  );
};

export default VideosPage;
