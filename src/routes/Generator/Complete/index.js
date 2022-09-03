import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";

function Complete({ state }) {
  const {
    title,
    description,
    url,
    imageUrl,
    objectType,
    locale,
    siteName,
    publishedTime,
    modifiedTime,
    expirationTime,
  } = state;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `<meta charset="utf-8">
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${description}">

<meta property="og:type" content="${objectType}">
${
  objectType === "article" && ([
    publishedTime && `<meta property="article:published_time" content="${publishedTime}">`,
    modifiedTime && `<meta property="article:modified_time" content="${modifiedTime}">`,
    expirationTime && `<meta property="article:expiration_time" content="${expirationTime}">`
  ].join("\n"))
}
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${imageUrl || "ADD YOUR IMAGE URL HERE"}">

<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url}">
<meta property="twitter:title" content="${title}">
<meta property="twitter:description" content="${description}">
<meta property="twitter:image" content="${
        imageUrl || "ADD YOUR IMAGE URL HERE"
      }">
`
    );
  };

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
              {objectType === "article" && (
                <>
                  {publishedTime && (
                    <span className="block">
                      &lt;
                      <span className="text-red-500">meta</span> property="
                      <span className="text-blue-300">
                        article:published_time
                      </span>
                      " content="
                      <span className="text-blue-300">{publishedTime}</span>
                      "&gt;
                    </span>
                  )}
                  {modifiedTime && (
                    <span className="block">
                      &lt;
                      <span className="text-red-500">meta</span> property="
                      <span className="text-blue-300">
                        article:modified_time
                      </span>
                      " content="
                      <span className="text-blue-300">{modifiedTime}</span>"&gt;
                    </span>
                  )}
                  {expirationTime && (
                    <span className="block">
                      &lt;
                      <span className="text-red-500">meta</span> property="
                      <span className="text-blue-300">
                        article:expiration_time
                      </span>
                      " content="
                      <span className="text-blue-300">{expirationTime}</span>
                      "&gt;
                    </span>
                  )}
                </>
              )}
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
              <span className="block">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">og:locale</span>" content="
                <span className="text-blue-300">{locale}</span>
                "&gt;
              </span>
              <span className="block mb-10">
                &lt;
                <span className="text-red-500">meta</span> property="
                <span className="text-blue-300">og:site_name</span>" content="
                <span className="text-blue-300">{siteName || title}</span>
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
                  copyToClipboard();
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
