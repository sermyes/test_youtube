import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        title={video.etag}
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
      />
      <h2 className={styles.title}>
        {video.snippet.title}
      </h2>
      <h3 className={styles.channelTitle}>
        {video.snippet.channelTitle}
      </h3>
      <pre className={styles.desc}>
        {video.snippet.description}
      </pre>
    </section>
  );
};

export default VideoDetail;
