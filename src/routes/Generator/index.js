import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Progress from "../../components/Progress";

function Generator() {
  const [progress, setProgress] = useState(0);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-auto pb-16">
        <div className="flex flex-auto flex-col min-w-1/12 p-5 border border-r-0 border-slate-200">
          <Link className="mb-3 p-2 rounded-lg text-slate-600 hover:bg-slate-100" to="basic">Basic</Link>
          <Link className="mb-3 p-2 rounded-lg text-slate-600 hover:bg-slate-100" to="advanced">Advanced</Link>
          <Link className="mb-8 p-2 rounded-lg text-slate-600 hover:bg-slate-100" to="custom">Custom</Link>
          <button className="p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-400">
            Generate
          </button>
        </div>
        <div className="flex flex-auto w-11/12 border border-slate-200">
          <div className="flex-auto bg-blue-500">

          </div>
          <div className="flex-auto bg-red-500">
            
            </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 flex justify-center items-center">
        <Link
          className="rounded-lg py-2 px-4 bg-blue-200 text-blue-800 hover:bg-blue-100 font-body"
          to="/generator"
          onClick={() => setProgress(progress - 25)}
        >
          Back
        </Link>
        <Progress percentage={progress} />
        <Link
          className="rounded-lg py-2 px-4 bg-blue-200 text-blue-800 hover:bg-blue-100 font-body"
          to="/generator"
          onClick={() => setProgress(progress + 25)}
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default Generator;
