import { ComponentPropsWithoutRef } from "react";
import { InputNumberWithActions } from "../input-number/InputNumberWithActions";
import { ActionsButtons } from "../buttons/ActionsButtons";
import { ReplyButton } from "../buttons/ReplyButton";
import { Comment } from "../../interfaces/CommentInterface";

interface Props extends ComponentPropsWithoutRef<"footer"> {
    score: number;
    currentUser: boolean;
    setisReplyActive: React.Dispatch<React.SetStateAction<boolean>>;
    setIsEditActive: React.Dispatch<React.SetStateAction<boolean>>
    isReplyActive: boolean;
    comment: Comment;
}

export const CardFooterComponent = ({
    score,
    currentUser,
    setisReplyActive,
    setIsEditActive,
    isReplyActive,
    comment,
    ...rest
}: Props) => {
    return (
        <footer
            className="flex justify-between items-center md:hidden"
            {...rest}
        >
            <InputNumberWithActions score={score} />

            <div>
                {currentUser ? (
                    <ActionsButtons comment={comment} setIsEditActive={setIsEditActive}  />
                ) : (
                    <ReplyButton
                        setisReplyActive={setisReplyActive}
                        isReplyActive={isReplyActive}
                    />
                )}
            </div>
        </footer>
    );
};
