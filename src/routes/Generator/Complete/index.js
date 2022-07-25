import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";

function Complete({ state }) {
  const { title, description } = state;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-auto pb-16">
        <Sidebar activeTab={""} />
        <div className="flex flex-auto w-11/12 border border-slate-200">
          <div className="flex flex-col w-full p-6">
            <code
              id="metatags"
              className="mt-1 font-mono relative w-full min-h-[50vh] p-6 rounded-lg text-slate-100 bg-slate-800 border-transparent focus:border-slate-900 focus:ring-0"
            >
              <span className="block">
                &lt;
                <span className="text-red-500">title</span>&gt;{title}&lt;/
                <span className="text-red-500">title</span>&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> name="
                <span className="text-blue-300">title</span>" content="
                <span className="text-blue-300">{title}</span>"&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> name="
                <span className="text-blue-300">description</span>" content="
                <span className="text-blue-300">{description}</span>"&gt;
              </span>
              <button
                className="absolute bottom-6 right-6 bg-slate-500 p-2 rounded-lg font-body hover:bg-slate-400"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `<title>${title}</title>\n<meta name="title" content="${title}">\n<meta name="description" content="${description}">\n`
                  );
                  alert("Copied!")
                }}
              >
                Copy to clipboard
              </button>
            </code>
          </div>
        </div>
      </div>
      <Footer back="../custom" progress={100} />
    </div>
  );
}

export default Complete;
