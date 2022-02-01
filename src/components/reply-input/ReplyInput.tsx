import React from "react";
import "./styles.css";

export default function ReplyInput(): JSX.Element {
  return (
    <div className="reply">
      <textarea className="reply__input" rows={6} cols={50}></textarea>
      <br />
      <button className="reply__submit">Submit</button>
    </div>
  );
}
