import React, { useState, useContext } from "react";
import "./Comment.css";
import Upvotes from "./Upvotes";
import ReplyInput from "./ReplyInput";
import CommentList from "./CommentList";
import { CommentDataContext } from "../context/CommentDataContext";

interface ICommentProps {
    commentId: string;
}

export default function Comment({ commentId }: ICommentProps) {
    const [replyVisible, setReplyVisible] = useState(false);

    const commentDataManager = useContext(CommentDataContext);

    const comment = commentDataManager.getComment(commentId);

    if (comment == null) {
        return <div></div>;
    }

    const replyToggleHandler = (e: any) => {
        e.preventDefault();
        setReplyVisible(!replyVisible);
    };

    const handleCloseReply = () => {
        setReplyVisible(false);
    };

    return (
        <div className="comment">
            <div className="comment__votes">
                <Upvotes upvotes={comment.upvotes} />
            </div>
            <div className="comment__content">
                <div className="comment__username">
                    <a href="">{comment.username}</a>
                </div>
                <div className="comment__text">{comment.message}</div>
                <div className="comment-list">
                    <CommentList commentIds={comment.children} />
                </div>
                <div className="comment__links">
                    <a href="" onClick={replyToggleHandler}>
                        reply
                    </a>
                </div>
                {replyVisible && (
                    <div className="comment__reply">
                        <ReplyInput
                            parentCommentId={commentId}
                            onReplySubmitted={handleCloseReply}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
