import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Progress from "../../components/Progress";

function Generator() {
  const [progress, setProgress] = useState(0);
  return (
    <div className="min-h-screen">
      <Header />
      <div className="absolute inset-x-0 bottom-0 h-16">
        <div className="flex justify-center">
          <Link
            className="rounded-lg text-lg px-2 py-2 bg-blue-200 text-blue-900 hover:bg-blue-100 font-body"
            to="/generator"
            onClick={() => setProgress(progress - 25)}
          >
            Back
          </Link>
          <Progress
            percentage={progress}
            />
          <Link
            className="rounded-lg text-lg px-2 py-2 bg-blue-200 text-blue-900 hover:bg-blue-100 font-body"
            to="/generator"
            onClick={() => setProgress(progress + 25)}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Generator;
