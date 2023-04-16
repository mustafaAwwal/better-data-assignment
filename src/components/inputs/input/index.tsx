import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
export const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...rest }) => (
  <input
    className={`${className} h-10 rounded-full border-2 border-blue-500 px-3 font-normal text-black shadow-lg placeholder:italic focus:outline-white`}
    {...rest}
  />
);
