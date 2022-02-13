import React from "react";
import Comment from "../comment/Comment";
import "./styles.css";
import { CommentData } from "../../types";

export default function CommentList(comments: Array<CommentData>): JSX.Element {
  return (
    <div>
      {comments.map((comment) => (
        <Comment commentData={comment} />
      ))}
    </div>
  );
}
