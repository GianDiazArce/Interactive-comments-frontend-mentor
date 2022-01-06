import { Comment } from "../../interfaces/CommentInterface";
import { useContext } from "react";
import { CommentContext } from "../context/CommentContext";

interface Props {
    comment: Comment;
    setIsEditActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ActionsButtons = ({ comment, setIsEditActive }: Props) => {
    const { deleteComment } = useContext(CommentContext);

    return (
        <div className="flex flex-row gap-4 mr-1">
            <button
                className="flex items-center gap-2 text-danger font-medium"
                onClick={(e) => {
                    comment && deleteComment(comment);
                }}
            >
                <img src="./images/icon-delete.svg" alt="" />
                Delete
            </button>
            <button
                className="flex items-center gap-2 text-primary font-medium"
                onClick={(e) => {
                    setIsEditActive((oldstate) => !oldstate);
                }}
            >
                <img src="./images/icon-edit.svg" alt="" />
                Edit
            </button>
        </div>
    );
};
