import { ComponentPropsWithoutRef, useContext, useState } from "react";
import { AvatarComponent } from "../avatar/AvatarComponent";
import { Comment } from "../../interfaces/CommentInterface";
import { CommentContext } from "../context/CommentContext";
import { v4 as uuidv4 } from "uuid";

interface Props extends ComponentPropsWithoutRef<"div"> {
    buttonText?: string;
    reply?: boolean;
    comment?: Comment;
    isEdit: boolean;
    setisReplyActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewComment = ({
    buttonText = "send",
    reply = false,
    comment,
    setisReplyActive,
    isEdit,
    ...rest
}: Props) => {
    const { currentUser, newComment, replyAReply, editComment } =
        useContext(CommentContext);
    const initialCommentState: Comment = {
        id: uuidv4(),
        user: currentUser,
        content: "",
        createdAt: "a minute ago",
        score: 0,
        replies: [],
        replyingTo: comment ? comment.user.username : "",
        replyPostId: comment?.id || undefined,
    };

    const [commentState, setCommentState] = useState<Comment>(
        isEdit === true && comment ? comment : initialCommentState
    );

    const commentContentChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCommentState({
            ...commentState,
            content: e.target.value,
        });
    };

    const commentButton = () => {
        if (isEdit === true) {
            editComment(commentState)
            setisReplyActive && setisReplyActive(false)
        } else {
            if (!reply) {
                newComment(commentState, false);
                setCommentState(initialCommentState);
            } else {
                if (comment?.replyingTo) {
                    replyAReply(
                        {
                            ...commentState,
                            replyingTo: comment.user.username,
                            replyPostId: comment.replyPostId,
                            id: uuidv4(),
                        },
                        comment.replyPostId || 0
                    );
                } else {
                    newComment(commentState, true);
                    setCommentState(initialCommentState);
                    setisReplyActive && setisReplyActive(false);
                }
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
                placeholder={isEdit ? "Edit a Comment" : "Add a comment..."}
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
