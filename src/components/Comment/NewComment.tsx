import { ComponentPropsWithoutRef, useContext, useState } from "react";
import { AvatarComponent } from "../avatar/AvatarComponent";
import { Comment } from "../../interfaces/CommentInterface";
import { CommentContext } from "../context/CommentContext";
import uuid from "uuid";

interface Props extends ComponentPropsWithoutRef<"div"> {
    buttonText?: string;
    reply?: boolean;
    comment?: Comment;
    setisReplyActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewComment = ({
    buttonText = "send",
    reply = false,
    comment,
    setisReplyActive,
    ...rest
}: Props) => {
    const { currentUser, newComment, replyAReply } = useContext(CommentContext);
    const initialCommentState: Comment = {
        id: uuid.v4(),
        user: currentUser,
        content: "",
        createdAt: "a minute ago",
        score: 0,
        replies: [],
        replyingTo: comment ? comment.user.username : "",
    };

    const [commentState, setCommentState] =
        useState<Comment>(initialCommentState);

    const commentContentChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCommentState({
            ...commentState,
            content: e.target.value,
        });
    };

    const commentButton = () => {
        if (!reply) {
            newComment(commentState, false);
            setCommentState(initialCommentState);
        } else {
            if (comment?.replyingTo) {
                replyAReply(
                    {
                        ...commentState,
                        replyingTo: comment.user.username,
                    },
                    comment.replyingTo
                );
            } else {
                newComment(commentState, true);
                setCommentState(initialCommentState);
                setisReplyActive && setisReplyActive(false);
            }
        }
    };
    return (
        <div
            {...rest}
            className="bg-white p-4 mt-4 rounded flex flex-col gap-5"
        >
            <textarea
                className="border-2 border-dotted border-primary/20 resize-none rounded w-full px-3 py-2"
                name="newComment"
                placeholder="Add a comment..."
                onChange={commentContentChange}
                value={commentState.content}
            ></textarea>
            <div className="flex justify-between items-center">
                <AvatarComponent
                    image={currentUser.image.png}
                    alt={currentUser.username}
                />
                <button
                    className="bg-primary hover:bg-primary/80 text-white uppercase px-8 py-3 rounded-lg"
                    onClick={commentButton}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};
