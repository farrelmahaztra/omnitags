import { Link } from "react-router-dom";
import defaultImage from "../../../static/img/default.jpg";

function Slack({ title, description, imageUrl }) {
  console.log(imageUrl)
  return (
    <label className="block mb-5">
      <span className="text-slate-800">Slack</span>
      <div className="max-w-[600px] min-h-[304px] flex relative overflow-hidden mt-5">
        <div className="w-[12px] min-h-[304px] rounded-[8px] bg-[#dddddd]"></div>
        <div className="flex flex-col px-[12px] leading-[1.46667]">
          <p className="font-bold">OmniTags</p>
          <Link className="text-[#1264a3] font-bold" to="#">
            {title}
          </Link>
          <p className="text-[##1D1C1D]">{description}</p>
          <div className='max-w-[360px] h-full my-[5px]'>
            <img className="rounded-[8px]" src={imageUrl || defaultImage} />
          </div>
        </div>
      </div>
    </label>
  );
}

export default Slack;
