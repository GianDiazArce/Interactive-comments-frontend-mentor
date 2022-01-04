import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"figure"> {
    image: string;
    alt: string;
}

export const AvatarComponent = ({ image, alt, ...rest }: Props) => {
    return (
        <figure
            {...rest}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        >
            <img className="w-full h-full object-cover" src={image} alt={alt} />
        </figure>
    );
};
