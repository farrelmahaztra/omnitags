import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import { Google } from "../../../components/Preview";

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
                value={title || ""}
              />
            </label>
            <label className="block">
              <span className="text-slate-800">Description</span>
              <textarea
                className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
                placeholder=""
                rows="4"
                onChange={(e) => {
                  dispatch({
                    type: "SET_DESCRIPTION",
                    value: e.target.value,
                  });
                }}
                value={description || ""}
              />
            </label>
          </div>
          <div className="flex flex-col w-2/5 p-6">
            <Google title={title} description={description} />
          </div>
        </div>
      </div>
      <Footer back="/" next="../advanced" progress={100 / 3} />
    </div>
  );
}

export default Basic;
