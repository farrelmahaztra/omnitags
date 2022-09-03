import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import Preview from "../../../components/Preview";
import TextInput from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";
import locales from "./locales.json";

function Advanced({ state, dispatch }) {
  const { title, description, url, imageUrl, siteName, locale } = state;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-auto pb-16">
        <Sidebar activeTab={"advanced"} />
        <div className="flex flex-auto w-11/12 border border-slate-200">
          <div className="flex flex-col w-2/5 border-r p-6">
            <label className="block mb-5">
              <span className="text-slate-800">Site name</span>
              <TextInput
                onChange={(e) =>
                  dispatch({
                    type: "SET_SITENAME",
                    value: e.target.value,
                  })
                }
                value={siteName || ""}
              />
            </label>
            <label className="block">
              <span className="text-slate-800">Locale</span>
              <SelectInput
                onChange={(e) =>
                  dispatch({
                    type: "SET_LOCALE",
                    value: e.target.value,
                  })
                }
                value={locale || ""}
                options={locales}
              />
            </label>
          </div>
          <div className="flex flex-col w-3/5 p-6 max-h-[894px] overflow-y-scroll">
            <Preview
              title={title}
              description={description}
              url={url}
              imageUrl={imageUrl}
              siteName={siteName}
            />
          </div>
        </div>
      </div>
      <Footer back="../basic" next="../custom" progress={100 / 3} />
    </div>
  );
}

export default Advanced;
