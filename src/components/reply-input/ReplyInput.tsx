import React, { useCallback, useContext, useState } from "react";
import "./styles.css";
import { CommentDataContext } from "../../context/CommentDataContext";

export default function ReplyInput(): JSX.Element {
    const commentDataManager = useContext(CommentDataContext);

    const [replyText, setReplyText] = useState("");

    const handleChangeTextArea = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setReplyText(e.target.value);
        },
        []
    );

    const handleSubmitReply = useCallback(() => {
        console.log("reply submitting");
        commentDataManager.addComment({
            message: replyText,
            upvotes: 0,
            username: "dummy_user",
            children: [],
        });
    }, [commentDataManager, replyText]);

    return (
        <div className="reply">
            <textarea
                className="reply__input"
                rows={6}
                cols={50}
                value={replyText}
                onChange={handleChangeTextArea}
            ></textarea>
            <br />
            <button className="reply__submit" onClick={handleSubmitReply}>
                Submit
            </button>
        </div>
    );
}
