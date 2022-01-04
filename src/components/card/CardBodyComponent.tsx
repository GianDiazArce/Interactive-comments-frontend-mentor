import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
    commentReplyTo?: string;
    content: string;
    reply?: Boolean;
}

export const CardBodyComponent = ({
    commentReplyTo,
    content,
    reply,
    ...rest
}: Props) => {
    return (
        <div {...rest}>
            <p className="text-base text-black/70 font-normal ">
                {reply && (
                    <span className="text-primary hover:opacity-50 font-medium cursor-pointer mr-1">
                        @{commentReplyTo}
                    </span>
                )}
                {content}
            </p>
        </div>
    );
};
