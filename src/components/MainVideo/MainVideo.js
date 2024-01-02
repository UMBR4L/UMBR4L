import React from 'react';
import './MainVideo.scss';

const MainVideo = ({ src, poster }) => (
  <div className="videoPlayer">
    <video src={src} controls poster={poster} />
  </div>
);

export default MainVideo;
