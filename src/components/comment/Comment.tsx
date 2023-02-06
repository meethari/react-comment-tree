import React, { useState, FunctionComponent, useContext } from "react";
import "./styles.css";
import Upvotes from "../upvotes/Upvotes";
import ReplyInput from "../reply-input/ReplyInput";
import CommentList from "../comment-list/CommentList";
import { CommentDataContext } from "../../context/CommentDataContext";

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
                <div className="comment__links">
                    <a href="" onClick={replyToggleHandler}>
                        reply
                    </a>
                </div>
                {replyVisible && (
                    <div className="comment__reply">
                        <ReplyInput />
                    </div>
                )}
                <div className="comment-list">
                    <CommentList commentIds={comment.children} />
                </div>
            </div>
        </div>
    );
}
