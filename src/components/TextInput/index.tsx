import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = ({ ...props }: TextInputProps) => (
  <input
    type="text"
    className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
    {...props}
  />
);

export default TextInput;
