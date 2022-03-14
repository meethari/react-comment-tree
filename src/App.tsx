import React from "react";
import "./App.css";
import Post from "./components/post/Post";
import Comment from "./components/comment/Comment";
import ReplyInput from "./components/reply-input/ReplyInput";
import { CommentData } from "./types";

const dummyComment: CommentData = {
  id: 1,
  message: "Hii",
  upvotes: 20,
  username: "Tizen",
  children: [
    {
      id: 2,
      message: "Hello there",
      upvotes: 42,
      username: "Roger",
      children: [
        {
          id: 3,
          message: "Nice to meet you!",
          upvotes: 12,
          username: "Tizen",
          children: [],
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Post />
      <span>Comment:</span>
      <br />
      <ReplyInput />
      <Comment commentData={dummyComment} />
    </div>
  );
}

export default App;
