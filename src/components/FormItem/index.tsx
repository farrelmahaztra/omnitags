interface FormItemProps {
  label: string;
  tooltip?: string;
  children: React.ReactNode;
}

const FormItem = ({ label, tooltip, children }: FormItemProps) => {
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
