interface GoogleProps {
  title: string;
  description: string;
  url: string;
}

const Google = ({ title, description, url }: GoogleProps) => (
  <label className="block mb-5">
    <span className="text-slate-800">Google</span>
    <div className="max-w-[600px] flex flex-col relative overflow-hidden mt-5">
      <div className="leading-[18px] flex">
        <span className="text-[#202124] font-sans text-sm pr-[5px] cursor-pointer">
          {url}
        </span>
        <svg
          className="fill-[#70757a] h-[22px] w-[22px] cursor-pointer"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </div>
      <div className="flex-1 block  mb-[3px] pt-[5px]">
        <h3 className="text-[#1a0dab] text-ellipsis overflow-hidden font-sans text-xl cursor-pointer">
          {title}
        </h3>
      </div>
      <div className="flex-1 block">
        <p
          className="text-[#4d5156] font-sans text-sm"
          style={{ overflowWrap: "break-word" }}
        >
          {description}
        </p>
      </div>
    </div>
  </label>
);

export default Google;
