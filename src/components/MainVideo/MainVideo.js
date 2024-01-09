import React from 'react';
import './MainVideo.scss';

const MainVideo = ({ src, poster }) => (
  <div className="videoPlayer">
    <video src={src} controls poster={poster} className='videoPlayer__video'/>
  </div>
);

export default MainVideo;
