import React from "react";
import Comment from "../comment/Comment";
import "./styles.css";
import { CommentData } from "../../types";

interface CommentListProps {
  comments: Array<CommentData>;
}

export default function CommentList(props: CommentListProps): JSX.Element {
  return (
    <>
      {props.comments.map((comment) => (
        <Comment commentData={comment} />
      ))}
    </>
  );
}
