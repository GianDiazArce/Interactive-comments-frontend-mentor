import { Comment } from "../../interfaces/CommentInterface";
import { AvatarComponent } from "../avatar/AvatarComponent";
import { ReplyButton } from "../buttons/ReplyButton";
import { ActionsButtons } from '../buttons/ActionsButtons';

interface Props {
    currentUser: boolean;
    comment: Comment;
    setisReplyActive: React.Dispatch<React.SetStateAction<boolean>>;
    isReplyActive: boolean;
}

export const CardHeaderComponent = ({
    currentUser,
    comment,
    isReplyActive,
    setisReplyActive,
}: Props) => {
    return (
        <header className="flex flex-center justify-between">
            <div className="flex flex-center justify-start items-center gap-3">
                <AvatarComponent
                    image={comment.user.image.png}
                    alt={comment.user.username}
                />
                <h3 className=" cursor-pointer font-bold ml-1 ">
                    {comment.user.username}
                </h3>
                {currentUser && (
                    <span className="text-xs font-semibold cursor-default inline-block py-1 px-2 rounded text-white bg-primary last:mr-0 mr-1">
                        you
                    </span>
                )}
    
                <span className="text-black/70">{comment.createdAt}</span>
            </div>

            <div className="hidden md:flex">
                {currentUser ? (
                    <ActionsButtons />
                ) : (
                    <ReplyButton
                        setisReplyActive={setisReplyActive}
                        isReplyActive={isReplyActive}
                    />
                )}
            </div>
        </header>
    );
};
