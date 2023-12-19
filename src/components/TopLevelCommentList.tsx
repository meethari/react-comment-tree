import React, { useContext } from "react";
import { CommentDataContext } from "../context/CommentDataContext";
import CommentList from "./CommentList";

export const TopLevelCommentList: React.FC = () => {
    const commentDataManager = useContext(CommentDataContext);
    const topLevelCommentIds = commentDataManager.getTopLevelCommentIds();
    return <CommentList commentIds={topLevelCommentIds} />;
};
