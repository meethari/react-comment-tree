import React, { useState } from "react";
import "./styles.css";
import Upvotes from "../upvotes/Upvotes";
import ReplyInput from "../reply-input/ReplyInput";

export default function Comment(): JSX.Element {
  const [replyVisible, setReplyVisible] = useState(false);

  const replyToggleHandler = (e: any) => {
    e.preventDefault();
    setReplyVisible(!replyVisible);
  };

  return (
    <div className="comment">
      <div className="comment__votes">
        <Upvotes />
      </div>
      <div className="comment__content">
        <div className="comment__username">
          <a href="">unidan</a>
        </div>
        <div className="comment__text">Wow, that was unexpected</div>
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
        <div className="comment-list">tbd</div>
      </div>
    </div>
  );
}
