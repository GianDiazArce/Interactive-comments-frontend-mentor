import { CardComponent } from "../card/CardComponent";

import { useContext } from 'react';
import { CommentContext } from "../context/CommentContext";

export const CommentsComponent = () => {
    const { commentsData } = useContext(CommentContext);
    return (
        <section className="flex flex-col gap-4">
            {commentsData.map((comment, index) => (
                <div key={index}>
                    <CardComponent comment={comment} />

                    {/* Replies */}
                    <div className="flex flex-col gap-3 mt-4 border-l-2 border-l-primary/10 pl-4 md:pl-8">
                        {comment.replies !== undefined &&
                            comment.replies.map((repplie, index) => (
                                <CardComponent
                                    key={index}
                                    comment={repplie}
                                    reply
                                />
                            ))}
                    </div>
                </div>
            ))}
        </section>
    );
};
