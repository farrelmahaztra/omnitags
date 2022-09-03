function DateInput({ onChange, value }) {
  return (
    <input
      class="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
      type="date"
      onChange={onChange}
      value={value}
    />
  );
}

export default DateInput;
