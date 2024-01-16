import React from "react";
import { Link } from "react-router-dom";

import "./NextVideosList.scss";

function NextVideoListItem({ video }) {
  return (
    <Link to={`/videos/${video.id}`} className="video-item">
      <img src={video.image} alt={video.title} className="video-item__thumbnail" />
      <div className="video-item__info">
        <h3 className="video-item__title">{video.title}</h3>
        <p className="video-item__channel">{video.channel}</p>
      </div>
    </Link>
  );
}

function NextVideosList({ videos }) {
  return (
    <div className="video-list">
      <h2 className="video-list__header">NEXT VIDEOS</h2>
      <ul className="video-list__items">
        {videos.map((video, index) => (
          <NextVideoListItem key={`next-video-${index}`} video={video} />
        ))}
      </ul>
    </div>
  );
}

export default NextVideosList;
