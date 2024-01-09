import React from "react";
import "./CommentSection.scss";

function Comment({ comment, index }) {
  return (
    <li className="comment">
      <div className="comment-avatar">
        <img
          src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
          alt={`${comment.name}'s Avatar`}
        />
      </div>
      <div className="comment-content">
        <div className="comment-content__header">
          <span className="comment-content__author">{comment.name}</span>
          <span className="comment-content__timestamp">
            {formatTimestamp(comment.timestamp)}
          </span>
        </div>
        <p className="comment-content__text">{comment.comment}</p>
      </div>
    </li>
  );
}

function CommentSection({ comments }) {
  return (
    <div className="comment-section">
      <ul className="comment-section__list">
        {comments.map((comment, index) => (
          <Comment key={`comment-${index}`} comment={comment} index={index} />
        ))}
      </ul>
    </div>
  );
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

export default CommentSection;
