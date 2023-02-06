import React, { createContext, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { compact } from "lodash";
import { ICommentSource } from "../types/CommentSource";

const defaultCommentDataManager = {
    getComment: (_id: string) => undefined,
    getTopLevelCommentIds: () => [],
    addComment: (_comment: ICommentSource) => "",
    addUpvote: (_id: string) => {},
    updateChildren: (_id: string, _children: string[]) => {},
    deleteComment: (_id: string) => {},
};

export const CommentDataContext = createContext<ICommentDataManager>(
    defaultCommentDataManager
);

export interface ICommentDataManager {
    getComment: (id: string) => ICommentSource | undefined;
    getTopLevelCommentIds: () => string[];
    addComment: (comment: ICommentSource) => string;
    addUpvote: (id: string) => void;
    updateChildren: (id: string, children: string[]) => void;
    deleteComment: (id: string) => void;
}

interface ICommentStore {
    [id: string]: ICommentSource | undefined;
}

interface ICommendDataContextProviderProps {
    defaultValue: IDefaultValue;
}

export interface IDefaultValue {
    commentStore: ICommentStore;
    topLevelCommentIds: string[];
}

export const CommentDataContextProvider: React.FC<
    ICommendDataContextProviderProps
> = ({ children, defaultValue }) => {
    const [topLevelCommentIds, setTopLevelCommentIds] = useState<string[]>([]);
    const [commentStore, setCommentStore] = useState<ICommentStore>({});

    useEffect(() => {
        setCommentStore(defaultValue.commentStore);
        setTopLevelCommentIds(defaultValue.topLevelCommentIds);
    }, [defaultValue]);

    const commentDataManager: ICommentDataManager = useMemo(
        () => ({
            getComment: (id: string) => {
                return commentStore[id];
            },
            getTopLevelCommentIds() {
                return topLevelCommentIds;
            },
            addComment: (
                comment: Omit<ICommentSource, "id">,
                parentId?: string
            ) => {
                const uuid = uuidv4();
                setCommentStore({
                    ...commentStore,
                    uuid: { ...comment, id: uuid },
                });

                if (parentId == null) {
                    setTopLevelCommentIds([...topLevelCommentIds, uuid]);
                    return uuid;
                }

                const parentComment = commentStore[parentId];
                if (parentComment == null) {
                    throw new Error(`parent ${parentId} doesn't exist`);
                }
                // updateChildren on this

                return uuid;
            },
            addUpvote: (id: string) => {
                const commentSource = commentStore[id];
                if (commentSource == null) {
                    return;
                }
                const updatedCommentSource: ICommentSource = {
                    ...commentSource,
                    upvotes: commentSource.upvotes + 1,
                };
                setCommentStore({ ...commentStore, id: updatedCommentSource });
            },
            updateChildren: (id: string, children: string[]) => {
                const currentCommentSource = commentStore[id];
                if (currentCommentSource == null) {
                    return;
                }
                setCommentStore({
                    ...commentStore,
                    id: {
                        ...currentCommentSource,
                        children,
                    },
                });
            },
            deleteComment: (id: string) => {
                setCommentStore({ ...commentStore, id: undefined });
            },
        }),
        [
            commentStore,
            topLevelCommentIds,
            setCommentStore,
            setTopLevelCommentIds,
        ]
    );

    return (
        <CommentDataContext.Provider value={commentDataManager}>
            {children}
        </CommentDataContext.Provider>
    );
};
