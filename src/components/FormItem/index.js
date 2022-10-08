const FormItem = ({ label, tooltip, children }) => {
  return (
    <label className="block mb-5">
      <span className="text-slate-800" title={tooltip}>
        {label}
      </span>
      {children}
    </label>
  );
};

export default FormItem;
