export type CommentData = {
    id: number;
    message: string;
    upvotes: number;
    username: string;
    children: Array<CommentData>;
}