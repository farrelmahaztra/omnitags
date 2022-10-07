const TextInput = ({ onChange, value }) => (
  <input
    type="text"
    className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
    placeholder=""
    onChange={onChange}
    value={value}
  />
);

export default TextInput;
