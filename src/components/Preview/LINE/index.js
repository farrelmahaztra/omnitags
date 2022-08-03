import defaultImage from "../../../static/img/default.jpg";

function LINE({ title, description, imageUrl }) {
  return (
    <label className="block mb-5">
      <span className="text-slate-800">LINE Messenger</span>
      <div className="max-w-[400px] min-h-[322px] w-full flex flex-col relative overflow-hidden mt-5 bg-[#9de693] rounded-[20px] cursor-pointer">
        <img className="max-h-[222px] object-cover" src={imageUrl || defaultImage} />
        <div className="p-4">
          <p className="text-[#010101] text-[17.5px] font-bold leading-[20px] mb-[5px]">{title}</p>
          <p className="text-[#488c47] text-[16px] leading-[20px]">{description}</p>
        </div>
      </div>
    </label>
  );
}

export default LINE;
