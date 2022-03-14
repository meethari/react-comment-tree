import React, { useState, FunctionComponent } from "react";
import "./styles.css";
import Upvotes from "../upvotes/Upvotes";
import ReplyInput from "../reply-input/ReplyInput";
import { CommentData } from "../../types";
import CommentList from "../comment-list/CommentList";

interface CommentProps {
  commentData: CommentData;
}

export default function Comment(props: CommentProps) {
  const [replyVisible, setReplyVisible] = useState(false);

  const replyToggleHandler = (e: any) => {
    e.preventDefault();
    setReplyVisible(!replyVisible);
  };

  return (
    <div className="comment">
      <div className="comment__votes">
        <Upvotes upvotes={props.commentData.upvotes} />
      </div>
      <div className="comment__content">
        <div className="comment__username">
          <a href="">{props.commentData.username}</a>
        </div>
        <div className="comment__text">{props.commentData.message}</div>
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
          <CommentList comments={props.commentData.children} />
        </div>
      </div>
    </div>
  );
}
