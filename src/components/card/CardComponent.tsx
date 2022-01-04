import { ComponentPropsWithoutRef, useContext, useState } from "react";
import { Comment } from "../../interfaces/CommentInterface";

import { CommentContext } from "../context/CommentContext";

import { CardHeaderComponent } from "./CardHeaderComponent";
import { CardBodyComponent } from "./CardBodyComponent";
import { CardFooterComponent } from "./CardFooterComponent";
import { NewComment } from "../Comment/NewComment";
import { InputNumberWithActions } from "../input-number/InputNumberWithActions";

interface Props extends ComponentPropsWithoutRef<"div"> {
    comment: Comment;
    reply?: boolean;
}

export const CardComponent = ({ reply = false, comment }: Props) => {
    const { checkCurrentUser } = useContext(CommentContext);
    const [isReplyActive, setisReplyActive] = useState(false);

    return (
        <div className="flex bg-white p-4 rounded-md md:flex-row md:justify-start gap-5">
            <div className="hidden md:flex">
                <InputNumberWithActions score={comment.score} />
            </div>
            <div className="flex flex-col gap-3 w-full">
                <CardHeaderComponent
                    currentUser={checkCurrentUser(comment.user)}
                    comment={comment}
                    setisReplyActive={setisReplyActive}
                    isReplyActive={isReplyActive}
                />
                <CardBodyComponent
                    commentReplyTo={comment.replyingTo}
                    content={comment.content}
                    reply={reply}
                />
                <CardFooterComponent
                    score={comment.score}
                    currentUser={checkCurrentUser(comment.user)}
                    setisReplyActive={setisReplyActive}
                    isReplyActive={isReplyActive}
                />
                {isReplyActive && (
                    <NewComment
                        buttonText="Reply"
                        reply
                        comment={comment}
                        setisReplyActive={setisReplyActive}
                    />
                )}
            </div>
        </div>
    );
};
