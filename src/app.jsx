import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './component/search_header/search_header';
import VideoList from './component/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };

  useEffect(
    () => {
      youtube
        .mostPopular() //
        .then(videos => setVideos(videos));
    },
    [youtube]
  );

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
