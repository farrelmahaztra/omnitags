import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";

function Basic({ state, dispatch }) {
  const { title, description } = state;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-auto pb-16">
        <Sidebar activeTab={"basic"} />
        <div className="flex flex-auto w-11/12 border border-slate-200">
          <div className="flex flex-col w-2/5 border-r p-6">
            <label className="block mb-5">
              <span className="text-slate-800">Image</span>
              <input
                className="block mt-2"
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                }}
              />
            </label>
            <label className="block mb-5">
              <span className="text-slate-800">Title</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
                placeholder=""
                onChange={(e) =>
                  dispatch({
                    type: "SET_TITLE",
                    value: e.target.value,
                  })
                }
              />
            </label>
            <label className="block">
              <span className="text-slate-800">Description</span>
              <textarea
                className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
                placeholder=""
                onChange={(e) => {
                  dispatch({
                    type: "SET_DESCRIPTION",
                    value: e.target.value,
                  });
                }}
              />
            </label>
          </div>
          <div className="flex flex-col w-2/5 p-6">
            <label className="block mb-5">
              <span className="text-slate-800">Google</span>
              <div className="max-w-[600px] flex flex-col relative overflow-hidden mt-5">
                <div className="leading-[18px] flex">
                  <span className="text-[#202124] font-sans text-sm pr-[5px] cursor-pointer">
                    https://omnitags.io
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
                <div className="flex-1 block overflow-hidden mb-[3px] pt-[5px]">
                  <span className="text-[#1a0dab] font-sans text-xl cursor-pointer">
                    {title || "OmniTags"}
                  </span>
                </div>
                <div className="flex-1 block overflow-hidden">
                  <span className="text-[#4d5156] font-sans text-sm">
                    {description ||
                      `Meta tags can be a hassle — it's hard to keep track of which ones help or hurt your SEO ranking. Our tool makes sure your business's website serves up the right tags and unfurls perfectly on every platform.`}
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <Footer back="/" next="../advanced" progress={100 / 3} />
    </div>
  );
}

export default Basic;
