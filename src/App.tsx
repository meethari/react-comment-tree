import React from "react";
import "./App.css";
import Post from "./components/post/Post";
import Comment from "./components/comment/Comment";
import ReplyInput from "./components/reply-input/ReplyInput";

function App() {
  return (
    <div className="App">
      <Post />
      <span>Comment:</span>
      <br />
      <ReplyInput />
      <Comment />
    </div>
  );
}

export default App;
