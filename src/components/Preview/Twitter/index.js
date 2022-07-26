import defaultImage from "../../../static/img/default.jpg";

function Twitter({ title, description, url, imageUrl }) {
  return (
    <label className="block mb-5">
      <span className="text-slate-800">Twitter</span>
      <div className="max-w-[506px] min-h-[374px] w-full flex flex-col relative overflow-hidden mt-5 border rounded-[16px] cursor-pointer">
        <img className="max-h-[264px] object-cover" src={imageUrl || defaultImage} />
        <div className="p-4">
          <p className="text-[16px] text-[#536471] mb-[5px] leading-[20px]">
            {url ? url.replace(/(^\w+:|^)\/\//, "") : ""}
          </p>
          <p className="text-[#0f1419] leading-[20px] mb-[5px]">{title}</p>
          <p className="text-[#506471] leading-[20px]">{description}</p>
        </div>
      </div>
    </label>
  );
}

export default Twitter;
