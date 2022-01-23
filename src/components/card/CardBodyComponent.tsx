import { ComponentPropsWithoutRef } from "react";
import { Comment } from "../../interfaces/CommentInterface";

interface Props extends ComponentPropsWithoutRef<"div"> {
    comment: Comment;
    reply?: Boolean;
}

export const CardBodyComponent = ({
    comment,
    reply,
    ...rest
}: Props) => {
    return (
        <div {...rest}>
            <p className="text-base text-black/70 font-normal ">
                {reply && (
                    <span className="text-primary hover:opacity-50 font-medium cursor-pointer mr-1">
                        @{comment.replyingTo}
                    </span>
                )}
                {comment.content}
            </p>
        </div>
    );
};
