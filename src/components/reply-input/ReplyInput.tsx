import React, { useCallback, useContext, useState } from "react";
import "./styles.css";
import { CommentDataContext } from "../../context/CommentDataContext";

interface IProps {
    // if this prop is not provided, the reply is submitted as a top level comment
    parentCommentId?: string;
    onReplySubmitted?: () => void;
}

const ReplyInput: React.FC<IProps> = ({
    parentCommentId,
    onReplySubmitted,
}) => {
    const commentDataManager = useContext(CommentDataContext);

    const [replyText, setReplyText] = useState("");

    const handleChangeTextArea = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setReplyText(e.target.value);
        },
        []
    );

    const handleSubmitReply = useCallback(() => {
        commentDataManager.addComment(
            {
                message: replyText,
                upvotes: 0,
                username: "admin",
                children: [],
            },
            parentCommentId
        );
        onReplySubmitted?.();
    }, [commentDataManager, onReplySubmitted, parentCommentId, replyText]);

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
};

export default ReplyInput;
