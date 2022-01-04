import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<"button"> {
    setisReplyActive: (value: React.SetStateAction<boolean>) => void
    isReplyActive: boolean;
}


export const ReplyButton = ({ isReplyActive, setisReplyActive, ...rest }: Props) => {
    return (
        <button
            className="flex items-center gap-2 font-medium cursor-pointer text-primary hover:opacity-50 mr-2"
            onClick={() => setisReplyActive(!isReplyActive)}
            {...rest}
        >
            <img src="./images/icon-reply.svg" alt="Reply Icon" />
            Reply
        </button>
    );
};
