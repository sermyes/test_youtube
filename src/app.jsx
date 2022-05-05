import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './component/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAczdl6_-1IwP8UbS2_GAc0fRA14tpefNY',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
