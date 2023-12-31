import React from 'react';
import './MainVideo.scss';

const MainVideo = ({ src }) => (
  <div className="videoPlayer">
    <video src={src} controls />
  </div>
);

export default MainVideo;