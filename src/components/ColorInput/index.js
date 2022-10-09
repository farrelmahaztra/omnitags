const ColorInput = ({ ...props }) => (
  <input
    className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0 cursor-pointer"
    type="color"
    {...props}
  />
);

export default ColorInput;
