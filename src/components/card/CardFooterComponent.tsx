import { ComponentPropsWithoutRef } from "react";
import { InputNumberWithActions } from "../input-number/InputNumberWithActions";
import { ActionsButtons } from "../buttons/ActionsButtons";
import { ReplyButton } from "../buttons/ReplyButton";

interface Props extends ComponentPropsWithoutRef<"footer"> {
    score: number;
    currentUser: boolean;
    setisReplyActive: React.Dispatch<React.SetStateAction<boolean>>;
    isReplyActive: boolean;
}

export const CardFooterComponent = ({
    score,
    currentUser,
    setisReplyActive,
    isReplyActive,
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
                    <ActionsButtons />
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
