import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
    score: number;
}

export const InputNumberWithActions = ({ score, ...rest }: Props) => {
    return (
        <div
            className="flex flex-row h-10 w-28 md:flex-col md:w-12 md:h-28 md:justify-center md:items-center rounded-xl bg-primary/10 relative  mt-1"
            {...rest}
        >
            <button className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-primary/25 h-full rounded-l cursor-pointer md:rounded-none w-full">
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
            <input
                type="number"
                className=" focus:outline-none text-center w-full  bg-transparent font-medium text-md focus:text-black md:text-base cursor-default flex items-center text-primary  outline-none"
                name="custom-input-number"
                value={score}
                readOnly
            />
            <button className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-primary/25 h-full rounded-r cursor-pointer outline-none md:rounded-none w-full">
                <span className="m-auto text-2xl font-thin">-</span>
            </button>
        </div>
    );
};
