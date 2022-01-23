import { ComponentPropsWithoutRef, useState } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
    score: number;
}

export const InputNumberWithActions = ({ score, ...rest }: Props) => {
    const [counter, setCounter] = useState(score);
    const scoreNumber = score;

    const buttonPressed = (op: "sum" | "res") => {
        op === "sum"
            ? setCounter((oldState) => Math.min(oldState + 1, scoreNumber + 1))
            : setCounter((oldState) => Math.max(oldState - 1, scoreNumber - 1));
    };

    return (
        <div
            className="flex flex-row h-10 w-28 md:flex-col md:w-12 md:h-28 md:justify-center md:items-center rounded-xl bg-primary/10 relative  mt-1"
            {...rest}
        >
            <button
                className={` text-gray-600 hover:text-gray-700 hover:bg-primary/25 h-full rounded-l cursor-pointer md:rounded-tr-xl md:rounded-tl-xl w-full 
                ${counter > scoreNumber ? "bg-primary/25" : "bg-transparent"}`}
                onClick={() => buttonPressed("sum")}
            >
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
            <input
                type="number"
                className=" focus:outline-none text-center w-full  bg-transparent font-medium text-md focus:text-black md:text-base cursor-default flex items-center text-primary  outline-none"
                name="custom-input-number"
                value={counter}
                readOnly
                aria-label="custom-input-number"
            />
            <button
                className={`${
                    counter < scoreNumber ? "bg-primary/25" : "bg-transparent"
                } text-gray-600 hover:text-gray-700 hover:bg-primary/25 h-full rounded-r cursor-pointer outline-none md:rounded-none md:rounded-br-xl md:rounded-bl-xl w-full`}
                onClick={() => buttonPressed("res")}
            >
                <span className="m-auto text-2xl font-thin">-</span>
            </button>
        </div>
    );
};
