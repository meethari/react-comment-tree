import React from "react";
import "./styles.css";
import Upvotes from "../upvotes/Upvotes";

export default function Comment(): JSX.Element {
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
          <a href="">reply</a>
        </div>
        <div className="comment__reply">...</div>
        <div className="comment-list">tbd</div>
      </div>
    </div>
  );
}
