import { InputHTMLAttributes } from "react";

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const DateInput = ({ ...props }: DateInputProps) => (
  <input
    className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
    type="date"
    {...props}
  />
);

export default DateInput;
