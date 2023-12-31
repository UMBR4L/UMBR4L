import React from 'react';
import './CommentForm.scss';
import userAvatar from "../../assets/Images/Mohan-muruge.jpg"

function CommentForm() {
    return (
        <div className="comment-form">
            <div className="user-avatar">
                <img src={userAvatar} alt="User Avatar" />
            </div>
            <h3 className="comment-form-header">Leave a Comment</h3>
            <form>
                <textarea
                    className="comment-input"
                    placeholder="Write your comment..."
                ></textarea>
                <button type="submit" className="comment-submit">
                    Comment
                </button>
            </form>
        </div>
    );
}

export default CommentForm;