import React from "react";
import "./App.css";
import Post from "./components/post/Post";
import ReplyInput from "./components/reply-input/ReplyInput";
import { CommentData } from "./types";
import CommentList from "./components/comment-list/CommentList";

const dummyComments: Array<CommentData> = [
  {
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
  },
  {
    id: 4,
    message: "Sup",
    upvotes: 20,
    username: "Tizen",
    children: [],
  },
];

function App() {
  return (
    <div className="App">
      <Post />
      <span>Comment:</span>
      <br />
      <ReplyInput />
      <CommentList comments={dummyComments} />
    </div>
  );
}

export default App;
