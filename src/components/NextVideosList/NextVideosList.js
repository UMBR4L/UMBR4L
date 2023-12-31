import React from 'react';
import './NextVideosList.scss';

function NextVideoListItem ({video, index, onVideoSelect}) {
    return (
        <li onClick={() => onVideoSelect(index)} className="video-list-item">
        <img src={video.image} alt={video.title} className="video-thumbnail" />
        <div className="video-info">
          <h3 className="video-title">{video.title}</h3>
          <p className="video-channel">{video.channel}</p>
        </div>
      </li>
    )
}
function NextVideosList({ videos, onVideoSelect }) {
  return (
    <div className="video-list">
      <h2 className="video-list-header">Up Next</h2>
      <ul className="video-list-items">
        {videos.map((video, index) => (
            <NextVideoListItem key={`next-video-${index}`} video={video} index={index} onVideoSelect={onVideoSelect} />
        ))}
      </ul>
    </div>
  );
}

export default NextVideosList;