const defaultImage = require("../../../static/img/default.jpg");

interface InstagramProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const Instagram = ({ title, description, url, imageUrl }: InstagramProps) => (
  <label className="block mb-5">
    <span className="text-slate-800">Instagram (Direct Message)</span>
    <div className="max-w-[444px] min-h-[374px] w-full flex flex-col relative overflow-hidden mt-5 bg-[#efefef] rounded-[20px] cursor-pointer">
      <div className="p-4">
        <p className="text-[#262626] text-[17.5px] font-bold leading-[20px]">
          {url}
        </p>
      </div>
      <img
        className="max-h-[222px] object-cover"
        src={imageUrl || defaultImage}
        alt="Your Instagram unfurl cover"
      />
      <div className="p-4">
        <p className="text-[#262626] text-[17.5px] leading-[20px] mb-[5px]">
          {title}
        </p>
        <p className="text-[#9f9f9f] text-[16px] leading-[20px]">
          {description}
        </p>
      </div>
    </div>
  </label>
);

export default Instagram;
