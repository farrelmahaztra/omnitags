import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";

function Complete({ state }) {
  const { title, description, url, imageUrl, objectType, siteName } = state;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-auto pb-16">
        <Sidebar activeTab={""} />
        <div className="flex flex-auto w-11/12 border border-slate-200">
          <div className="flex flex-col w-full p-6">
            <code
              id="metatags"
              className="mt-1 font-mono relative w-full min-h-[70vh] p-6 rounded-lg text-slate-100 bg-slate-800 border-transparent focus:border-slate-900 focus:ring-0"
            >
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> charset="
                <span className="text-blue-300">utf-8</span>"&gt;
              </span>
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
              <span className="block mb-10">
                &lt;
                <span className="text-red-500">meta</span> name="
                <span className="text-blue-300">description</span>" content="
                <span className="text-blue-300">{description}</span>"&gt;
              </span>

              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">og:type</span>" content="
                <span className="text-blue-300">{objectType}</span>"&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">og:url</span>" content="
                <span className="text-blue-300">{url}</span>"&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">og:title</span>" content="
                <span className="text-blue-300">{title}</span>"&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">og:description</span>" content="
                <span className="text-blue-300">{description}</span>"&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">og:image</span>" content="
                <span className="text-blue-300">
                  {imageUrl || "ADD YOUR IMAGE URL HERE"}
                </span>
                "&gt;
              </span>
              <span className="block mb-10">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">og:site_name</span>" content="
                <span className="text-blue-300">
                  {siteName || title}
                </span>
                "&gt;
              </span>

              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">twitter:card</span>" content="
                <span className="text-blue-300">summary_large_image</span>"&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">twitter:url</span>" content="
                <span className="text-blue-300">{url}</span>"&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">twitter:title</span>" content="
                <span className="text-blue-300">{title}</span>"&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">twitter:description</span>"
                content="
                <span className="text-blue-300">{description}</span>"&gt;
              </span>
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">twitter:image</span>" content="
                <span className="text-blue-300">
                  {imageUrl || "ADD YOUR IMAGE URL HERE"}
                </span>
                "&gt;
              </span>
              <button
                className="absolute bottom-6 right-6 bg-slate-500 p-2 rounded-lg font-body hover:bg-slate-400"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `<meta charset="utf-8">\n<title>${title}</title>\n<meta name="title" content="${title}">\n<meta name="description" content="${description}">\n\n<meta property="og:type" content="${objectType}">\n<meta property="og:url" content="${url}">\n<meta property="og:title" content="${title}">\n<meta property="og:description" content="${description}">\n<meta property="og:image" content="${
                      imageUrl || "ADD YOUR IMAGE URL HERE"
                    }">\n\n<meta property="twitter:card" content="summary_large_image">\n<meta property="twitter:url" content="${url}">\n<meta property="twitter:title" content="${title}">\n<meta property="twitter:description" content="${description}">\n<meta property="twitter:image" content="${
                      imageUrl || "ADD YOUR IMAGE URL HERE"
                    }">\n`
                  );
                  alert("Copied!");
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
