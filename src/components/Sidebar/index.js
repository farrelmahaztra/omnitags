import { Link } from "react-router-dom";

function Sidebar({ activeTab }) {
  return (
    <div className="flex flex-auto flex-col min-w-1/12 p-5 border border-r-0 border-slate-200">
      <Link
        className={`mb-3 p-2 rounded-lg text-slate-600 hover:bg-slate-100 ${
          activeTab === "basic" && "bg-slate-100"
        }`}
        to="../basic"
      >
        Basic
      </Link>
      <Link
        className={`mb-3 p-2 rounded-lg text-slate-600 hover:bg-slate-100 ${
          activeTab === "advanced" && "bg-slate-100"
        }`}
        to="../advanced"
      >
        Advanced
      </Link>
      <Link
        className={`mb-6 p-2 rounded-lg text-slate-600 hover:bg-slate-100 ${
          activeTab === "custom" && "bg-slate-100"
        }`}
        to="../custom"
      >
        Custom
      </Link>
      <button className="p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-400">
        Generate
      </button>
    </div>
  );
}

export default Sidebar;
