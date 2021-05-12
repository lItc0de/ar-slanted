import React, { useState, useEffect } from 'react';

import Overlay from '../../components/overlay';
import Video from '../../components/video';
import Layout from '../../components/layout';
import { NumberList, NumberListItem } from '../../components/number-list';

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

        <NumberList>
        {chapter &&
            chapter.markers.sort((a, b) => a.page - b.page).map((marker, i) => (
            <NumberListItem
              key={`${marker.videoName}-${i}`}
              number={marker.page}
              onClick={() => setCurrentMarker(marker)}
            >
              {`${marker.author} - ${marker.videoDescription}`}
            </NumberListItem>
          ))}
        </NumberList>
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
