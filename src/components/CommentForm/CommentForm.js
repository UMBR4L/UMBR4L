import React from 'react';
import './CommentForm.scss';
import UserAvatar from '../UserAvatar/UserAvatar';

function CommentForm() {
    return (
        <div className="comment-form">
            <UserAvatar className="user-avatar" />
            <h3 className="comment-form__header">JOIN THE CONVERSATION</h3>
            <form>
                <textarea
                    className="comment-form__input"
                    placeholder="Add a new comment"
                ></textarea>
                <button type="submit" className="comment-form__submit">
                    Comment
                </button>
            </form>
        </div>
    );
}

export default CommentForm;