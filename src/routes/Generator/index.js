import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

function Generator() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-auto pb-16">
        <Sidebar />
        <div className="flex flex-auto w-11/12 border border-slate-200">
          <div className="flex flex-col w-2/5 border-r p-6">
            <label className="block mb-5">
              <span className="text-slate-800">Image</span>
              <input className="block mt-2" type="file" id="img" name="img" accept="image/*" />
            </label>
            <label className="block mb-5">
              <span className="text-slate-800">Title</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-slate-800">Description</span>
              <textarea
                className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
                placeholder=""
              />
            </label>
          </div>
          <div className="flex-auto w-3/5"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Generator;
