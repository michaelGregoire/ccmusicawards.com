import React from 'react';
const Video = ({ src }) => {
  return (
    <div className="video-wrapper">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default Video;
