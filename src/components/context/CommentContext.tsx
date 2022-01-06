import { createContext, useState } from "react";
import { User, Comment } from "../../interfaces/CommentInterface";
import data from "../../data/data.json";

interface CommentContextProps {
    checkCurrentUser: (user: User) => boolean;
    currentUser: User;
    commentsData: Comment[];
    newComment: (comment: Comment, reply: boolean) => void;
    replyAReply: (comment: Comment, replyPostId: number | string) => void;
    editComment: (comment: Comment) => void;
    deleteComment: (comment: Comment) => void;
}

export const CommentContext = createContext({} as CommentContextProps);

export const CustomCommentProvider = ({ children }: any) => {
    const [commentsData, setcommentsData] = useState<Comment[]>(data.comments);
    const [currentUser] = useState<User>(data.currentUser);

    const checkCurrentUser = (user: User) => {
        return data.currentUser.username === user.username ? true : false;
    };

    const newComment = (comment: Comment, reply: boolean = false) => {
        if (reply === true) {
            let commentToReply = commentsData.find(
                (toReply) => comment.replyingTo === toReply.user.username
            );
            let copyCommentsData = commentsData.slice();
            if (commentToReply) {
                copyCommentsData
                    .find((comm) => comm.id === commentToReply?.id)
                    ?.replies?.push(comment);
                setcommentsData(copyCommentsData);
            }
        } else {
            setcommentsData((oldState) => [...oldState, comment]);
        }
    };

    const replyAReply = (comment: Comment, replyPostId: number | string) => {
        let copyCommentsData = commentsData.slice();
        copyCommentsData
            .find((comm) => comm.id === replyPostId)
            ?.replies?.push(comment);
        setcommentsData(copyCommentsData);
    };

    const editComment = (comment: Comment) => {
        let copyCommentsData = commentsData.slice();
        if (comment.user.username === currentUser.username) {
            if (comment.replyingTo) {
                console.log("respuesta");
                copyCommentsData.forEach((el, index) => {
                    if (el.id === comment.replyPostId) {
                        copyCommentsData[index].replies?.forEach(
                            (el2, index2) => {
                                if (
                                    copyCommentsData[index]!.replies![index2]
                                        .id === comment.id
                                ) {
                                    copyCommentsData[index]!.replies![
                                        index2
                                    ].content = comment.content;
                                }
                            }
                        );
                    }
                });
                setcommentsData(copyCommentsData);
            } else {
                console.log("Comentario solo");
                copyCommentsData.forEach((el, index) => {
                    if (el.id === comment.id) {
                        copyCommentsData[index].content = comment.content;
                    }
                });
                setcommentsData(copyCommentsData);
            }
        }
    };

    const deleteComment = (comment: Comment) => {
        let copyCommentsData = commentsData.slice();
        if (comment.user.username === currentUser.username) {
            if (comment.replyingTo) {
                copyCommentsData.forEach((element, index) => {
                    if (element.id === comment.replyPostId) {
                        copyCommentsData[index].replies =
                            element.replies?.filter(
                                (comm) => comm.id !== comment.id
                            );
                    }
                });
                setcommentsData(copyCommentsData);
            } else {
                copyCommentsData = commentsData.filter(
                    (comm) => comm.id !== comment.id
                );
                setcommentsData(copyCommentsData);
            }
        }
    };

    return (
        <CommentContext.Provider
            value={{
                checkCurrentUser,
                newComment,
                commentsData,
                currentUser,
                replyAReply,
                deleteComment,
                editComment,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};
