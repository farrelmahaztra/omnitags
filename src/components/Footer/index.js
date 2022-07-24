import { useState } from "react";
import { Link } from "react-router-dom";
import Progress from "../../components/Progress";

function Footer({ next, back, progress }) {
  return (
    <div className="absolute inset-x-0 bottom-0 h-16 flex justify-center items-center">
      <Link
        className="rounded-lg py-2 px-4 bg-blue-200 text-blue-800 hover:bg-blue-100 font-body"
        to={back}
      >
        Back
      </Link>
      <Progress percentage={progress} />
      <Link
        className="rounded-lg py-2 px-4 bg-blue-200 text-blue-800 hover:bg-blue-100 font-body"
        to={next}
      >
        Next
      </Link>
    </div>
  );
}

export default Footer;
