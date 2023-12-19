import React from "react";

interface UpvotesProps {
    upvotes: number;
}

export default function Upvotes(props: UpvotesProps): JSX.Element {
    return (
        <div>
            <span>{props.upvotes}</span>
        </div>
    );
}
