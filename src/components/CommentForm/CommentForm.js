import React from "react";
import "./CommentForm.scss";
import UserAvatar from "../UserAvatar/UserAvatar";

function CommentForm({ commentCount }) {
  return (
    <div className="comment-form">
      <h3 className="comment-form__comment-count subheader">
        {commentCount} Comments
      </h3>
      <UserAvatar className="user-avatar" />
      <form>
        <label for="commentForm" className="comment-form__header section-header">JOIN THE CONVERSATION</label>
        <input
            name="commentForm"
          className="comment-form__input"
          placeholder="Add a new comment"
        ></input>
        <button type="submit" className="comment-form__submit">
          Comment
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
