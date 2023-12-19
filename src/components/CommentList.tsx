import Comment from "./Comment";

interface CommentListProps {
    commentIds: Array<string>;
}

export default function CommentList({
    commentIds,
}: CommentListProps): JSX.Element {
    return (
        <>
            {commentIds.map((commentId) => (
                <Comment commentId={commentId} key={commentId} />
            ))}
        </>
    );
}
