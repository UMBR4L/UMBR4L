import React from 'react';
import './VideoDetails.scss';
import viewsIcon from '../../assets/Images/icons/views.svg'; 
import likesIcon from '../../assets/Images/icons/likes.svg'; 

function VideoDetails({ title, author, likes, views, description, date }) {
  return (
    <div className="video-details">
      <h2 className="video-title">{title}</h2>
      <div className="video-metadata">
        <div className="video-info">
          <p className="video-author">By {author}</p>
          <p className="video-date">{date}</p>
        </div>
        <div className="video-stats">
          <p className="video-views">
            <img src={viewsIcon} alt="Views" className="icon-views" />
            {views}
          </p>
          <p className="video-likes">
            <img src={likesIcon} alt="Likes" className="icon-likes" />
            {likes}
          </p>
        </div>
      </div>
      <hr className="divider" />
      <p className="video-description">{description}</p>
    </div>
  );
}

export default VideoDetails;
