import React from "react";
import "./styles.css";

interface UpvotesProps {
  upvotes: number;
}

export default function Upvotes(props: UpvotesProps): JSX.Element {
  return (
    <div>
      <span>{props.upvotes}</span>
    </div>
  );
}
