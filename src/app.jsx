import React, { useState, useEffect, useCallback } from 'react';
import styles from './app.module.css';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './component/video_detail/video_detail';
import VideoList from './component/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [mostVideos, setMostVideos] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const backToHome = useCallback(
    () => {
      setSelectedVideo(null);
      setVideos(mostVideos);
    },
    [mostVideos]
  );

  const search = useCallback(
    query => {
      youtube
        .search(query) //
        .then(videos => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [setVideos, setSelectedVideo, youtube]
  );

  useEffect(
    () => {
      youtube
        .mostPopular() //
        .then(videos => {
          setVideos(videos);
          setMostVideos(videos);
        });
    },
    [youtube]
  );

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onLogoClick={backToHome} />
      <section className={styles.content}>
        {selectedVideo &&
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
