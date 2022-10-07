const SelectInput = ({ onChange, value, options }) => (
  <select
    class="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
    onChange={onChange}
    value={value}
  >
    {options.map((option) => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
);

export default SelectInput;
