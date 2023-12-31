import React from 'react';
import './CommentSection.scss';

function Comment({comment, index}) {
    return (
        <li className="comment">
        <div className="comment-avatar">
          <img
            src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
            alt={`${comment.name}'s Avatar`}
          />
        </div>
        <div className="comment-content">
          <div className="comment-header">
            <span className="comment-author">{comment.name}</span>
            <span className="comment-timestamp">
              {formatTimestamp(comment.timestamp)}
            </span>
          </div>
          <p className="comment-text">{comment.comment}</p>
          <div className="comment-actions">
            <button className="comment-like">
              <i className="fas fa-thumbs-up"></i>
              {comment.likes} Likes
            </button>
          </div>
        </div>
      </li>
    )
}
 
function CommentSection({ comments }) {
  return (
    <div className="comment-section">

      <h3 className="comment-header">Comments ({comments.length})</h3>
      <ul className="comment-list">
        {comments.map((comment, index) => (
            <Comment key={`comment-${index}`} comment={comment} index={index} />
        ))}
      </ul>
    </div>
  );
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

export default CommentSection;