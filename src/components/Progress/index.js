function Progress({ percentage = 0 }) {
  return (
    <div className="w-1/3 h-10 mx-8 rounded-lg border-2 border-slate-200">
      <div
        className="h-full bg-blue-500 rounded-lg"
        style={{ width: `${percentage}%`, transition: "width 250ms ease" }}
      ></div>
    </div>
  );
}

export default Progress;
