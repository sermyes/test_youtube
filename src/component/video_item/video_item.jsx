import React from 'react';

const VideoItem = props => {
  console.log();

  return (
    <h1>
      {props.video.snippet.title}
    </h1>
  );
};

export default VideoItem;
