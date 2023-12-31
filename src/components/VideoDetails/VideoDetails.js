import React from 'react';
import './VideoDetails.scss';

function VideoDetails({ title, author, likes, views, description }) {
  return (
    <div className="video-details">
      <h2 className="video-title">{title}</h2>
      <div className="video-metadata">
        <p className="video-author">{author}</p>
        <p className="video-likes">{likes} Likes</p>
        <p className="video-views">{views} Views</p>
      </div>
      <hr className="divider" />
      <p className="video-description">{description}</p>
    </div>
  );
}

export default VideoDetails;