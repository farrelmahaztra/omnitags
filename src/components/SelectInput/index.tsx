import { InputHTMLAttributes } from "react";

interface SelectInputOption {
  label: string;
  value: string;
}

interface SelectInputProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: SelectInputOption[];
}

const SelectInput = ({ options, ...props }: SelectInputProps) => (
  <select
    className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
    {...props}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default SelectInput;
