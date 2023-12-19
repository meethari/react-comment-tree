import React from "react";
import "./App.css";
import { Post } from "./components/post/Post";
import ReplyInput from "./components/reply-input/ReplyInput";
import {
    CommentDataContextProvider,
    IDefaultValue,
} from "./context/CommentDataContext";
import { TopLevelCommentList } from "./components/TopLevelCommentList";

const dummyComments: IDefaultValue = {
    commentStore: {
        "1": {
            id: "1",
            message: "Hii",
            upvotes: 20,
            username: "Tizen",
            children: ["2"],
        },
        "2": {
            id: "2",
            message: "Hello there",
            upvotes: 42,
            username: "Roger",
            children: ["3"],
        },
        "3": {
            id: "3",
            message: "Nice to meet you!",
            upvotes: 12,
            username: "Tizen",
            children: [],
        },
        "4": {
            id: "4",
            message: "Sup",
            upvotes: 20,
            username: "Tizen",
            children: [],
        },
    },
    topLevelCommentIds: ["1", "4"],
};

function App() {
    return (
        <div className="App">
            <Post />
            <span>Comment:</span>
            <br />
            <CommentDataContextProvider defaultValue={dummyComments}>
                <ReplyInput />
                <TopLevelCommentList />
            </CommentDataContextProvider>
        </div>
    );
}

export default App;
