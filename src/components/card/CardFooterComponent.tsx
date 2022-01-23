import { ComponentPropsWithoutRef } from "react";
import { InputNumberWithActions } from "../input-number/InputNumberWithActions";
import { ActionsButtons } from "../buttons/ActionsButtons";
import { ReplyButton } from "../buttons/ReplyButton";
import { Comment } from "../../interfaces/CommentInterface";

interface Props extends ComponentPropsWithoutRef<"footer"> {
    currentUser: boolean;
    setisReplyActive: React.Dispatch<React.SetStateAction<boolean>>;
    setIsEditActive: React.Dispatch<React.SetStateAction<boolean>>;
    comment: Comment;
}

export const CardFooterComponent = ({
    currentUser,
    setisReplyActive,
    setIsEditActive,
    comment,
    ...rest
}: Props) => {
    return (
        <footer
            className="flex justify-between items-center md:hidden"
            {...rest}
        >
            <InputNumberWithActions score={comment.score} />

            <div>
                {currentUser ? (
                    <ActionsButtons
                        comment={comment}
                        setIsEditActive={setIsEditActive}
                    />
                ) : (
                    <ReplyButton setisReplyActive={setisReplyActive} />
                )}
            </div>
        </footer>
    );
};
