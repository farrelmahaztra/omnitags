import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";

function Advanced() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-auto pb-16">
        <Sidebar activeTab={"advanced"} />
        <div className="flex flex-auto w-11/12 border border-slate-200">
          <div className="flex flex-col w-2/5 border-r p-6"></div>
          <div className="flex-auto w-3/5"></div>
        </div>
      </div>
      <Footer back="../basic" next="../custom" progress={100/3*2} />
    </div>
  );
}

export default Advanced;
