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
          <div className="flex-auto bg-blue-500"></div>
          <div className="flex-auto bg-red-500"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Generator;
