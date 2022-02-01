import React from "react";
import "./App.css";
import Post from "./components/post/Post";
import Comment from "./components/comment/Comment";

function App() {
  return (
    <div className="App">
      <Post />
      <Comment />
    </div>
  );
}

export default App;
