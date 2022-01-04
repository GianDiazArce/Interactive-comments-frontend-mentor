import { createContext, useState } from "react";
import { User, Comment } from "../../interfaces/CommentInterface";
import data from "../../data/data.json";

interface CommentContextProps {
    checkCurrentUser: (user: User) => boolean;
    currentUser: User;
    commentsData: Comment[];
    newComment: (comment: Comment, reply: boolean) => void;
    replyAReply: (comment: Comment, nameToReply: string) => void;
}

export const CommentContext = createContext({} as CommentContextProps);
// TODO:
// Sistema de likes cuando se da un like un estado pasa a false y se evalua el anterior para bloquear si incremento y se devuelve el estado en caso de volver al original

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
                copyCommentsData[commentToReply.id - 1].replies?.push(comment);
                setcommentsData(copyCommentsData);
            }
        } else {
            setcommentsData((oldState) => [...oldState, comment]);
        }
    };

    const replyAReply = (comment: Comment, nameToReply: string) => {
        let copyCommentsData = commentsData.slice();
        console.log({ comment, nameToReply });
        let idToReply = getIdByName(nameToReply || "");
        if (idToReply) {
            copyCommentsData[idToReply - 1].replies?.push(comment);
            setcommentsData(copyCommentsData);
        }
    };

    const getIdByName = (name: string) => {
        return commentsData.find((comm) => comm.user.username === name)?.id;
    };

    return (
        <CommentContext.Provider
            value={{
                checkCurrentUser,
                newComment,
                commentsData,
                currentUser,
                replyAReply,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};
