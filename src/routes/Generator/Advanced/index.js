import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import Preview from "../../../components/Preview";
import TextInput from "../../../components/TextInput";

function Advanced({ state, dispatch }) {
  const { title, description, url, imageUrl, charset } = state;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-auto pb-16">
        <Sidebar activeTab={"advanced"} />
        <div className="flex flex-auto w-11/12 border border-slate-200">
          <div className="flex flex-col w-2/5 border-r p-6">
            <label className="block mb-5">
              <span className="text-slate-800">Character set</span>
              <TextInput
                onChange={(e) =>
                  dispatch({
                    type: "SET_CHARSET",
                    value: e.target.value,
                  })
                }
                value={charset || ""}
              />
            </label>
          </div>
          <div className="flex flex-col w-3/5 p-6 max-h-[894px] overflow-y-scroll">
            <Preview
              title={title}
              description={description}
              url={url}
              imageUrl={imageUrl}
            />
          </div>
        </div>
      </div>
      <Footer back="../basic" next="../custom" progress={100 / 3} />
    </div>
  );
}

export default Advanced;
