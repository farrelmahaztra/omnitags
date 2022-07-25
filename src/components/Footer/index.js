import { Link } from "react-router-dom";
import Progress from "../../components/Progress";

function Footer({ next, back, progress }) {
  return (
    <div className="absolute inset-x-0 bottom-0 h-16 flex justify-center items-center">
      <Link
        className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
        to={back}
      >
        Back
      </Link>
      <Progress percentage={progress} />
      <Link
        className={`rounded-lg py-2 px-4 ${
          next
            ? "text-slate-600 hover:bg-slate-100"
            : "bg-slate-200 text-slate-400 cursor-not-allowed"
        }  font-body`}
        to={next || "#"}
      >
        Next
      </Link>
    </div>
  );
}

export default Footer;
