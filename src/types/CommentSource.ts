export interface ICommentSource {
    id: string;
    message: string;
    upvotes: number;
    username: string;
    children: string[];
}