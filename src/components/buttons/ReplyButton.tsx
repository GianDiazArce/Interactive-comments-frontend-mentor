import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
    setisReplyActive: (value: React.SetStateAction<boolean>) => void;
}

export const ReplyButton = ({ setisReplyActive, ...rest }: Props) => {
    return (
        <button
            className="flex items-center gap-2 font-medium cursor-pointer text-primary hover:opacity-50 mr-2"
            onClick={() => setisReplyActive((oldstate) => !oldstate)}
            {...rest}
        >
            <img src="./images/icon-reply.svg" alt="Reply Icon" />
            Reply
        </button>
    );
};
