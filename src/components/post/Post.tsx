import React from "react";
import "./styles.css";
import xboxImg from "../../images/xbox.jpg";
import Upvotes from "../upvotes/Upvotes";

export default function Post(): JSX.Element {
  return (
    <div className="post">
      <div className="post__upvotes">
        <Upvotes />
      </div>
      <img className="post__img" src={xboxImg} alt="Xbox"></img>
      <div className="post__text">
        <div className="post__url">
          <a href="https://www.theverge.com/2022/1/18/22889258/microsoft-activision-blizzard-xbox-acquisition-call-of-duty-overwatch">
            Microsoft to acquire Activision in 67 billion dollar deal
          </a>
        </div>
        <div>
          <span>
            submitted 1 day ago by <a href="">user782</a>
          </span>
        </div>
        <div>
          <a href="">100 comments</a>
          <span> </span>
          <a href="">share</a>
          <span> </span>
          <a href="">hide</a>
        </div>
      </div>
    </div>
  );
}
