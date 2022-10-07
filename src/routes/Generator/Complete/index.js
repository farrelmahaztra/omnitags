import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

const Complete = ({ state }) => {
  const {
    title,
    description,
    url,
    imageUrl,
    objectType,
    locale,
    siteName,
    themeColor,
    publishedTime,
    modifiedTime,
    expirationTime,
    profileFirstName,
    profileLastName,
    profileUsername,
    profileGender,
  } = state;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="${themeColor}">
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="robots" content="index, follow">
<meta name="description" content="${description}">

<meta property="og:type" content="${objectType}">${
        (objectType === "article" &&
          publishedTime &&
          `\n<meta property="article:published_time" content="${publishedTime}">`) ||
        ""
      }${
        (objectType === "article" &&
          modifiedTime &&
          `\n<meta property="article:modified_time" content="${modifiedTime}">`) ||
        ""
      }${
        (objectType === "article" &&
          expirationTime &&
          `\n<meta property="article:expiration_time" content="${expirationTime}">`) ||
        ""
      }${
        (objectType === "profile" &&
          profileFirstName &&
          `\n<meta property="profile:first_name" content="${profileFirstName}">`) ||
        ""
      }${
        (objectType === "profile" &&
          profileLastName &&
          `\n<meta property="profile:last_name" content="${profileLastName}">`) ||
        ""
      }${
        (objectType === "profile" &&
          profileUsername &&
          `\n<meta property="profile:username" content="${profileUsername}">`) ||
        ""
      }${
        (objectType === "profile" &&
          profileGender &&
          `\n<meta property="profile:gender" content="${profileGender}">`) ||
        ""
      }
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${imageUrl || "ADD YOUR IMAGE URL HERE"}">
<meta property="og:locale" content="${locale}">
<meta property="og:site_name" content="${siteName || title}">

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

  const TitleTag = ({ title }) => (
    <span className="block">
      &lt;
      <span className="text-red-500">title</span>&gt;{title}&lt;/
      <span className="text-red-500">title</span>&gt;
    </span>
  );

  const MetaCharsetTag = () => (
    <span className="block">
      &lt;
      <span className="text-red-500">meta</span> charset="
      <span className="text-blue-300">utf-8</span>"&gt;
    </span>
  );

  const MetaTag = ({ className = "block", name, property, content }) => {
    return (
      <span className={className}>
        &lt;
        <span className="text-red-500">meta</span>
        {name && (
          <>
            {" "}
            name="<span className="text-blue-300">{name}</span>"{" "}
          </>
        )}
        {property && (
          <>
            {" "}
            property="<span className="text-blue-300">{property}</span>"{" "}
          </>
        )}
        content="
        <span className="text-blue-300">{content}</span>
        "&gt;
      </span>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-auto flex-col md:flex-row">
        <Sidebar activeTab={""} />
        <div className="flex flex-auto flex-col md:flex-row md:w-11/12 border border-slate-200">
          <div className="flex flex-col w-full p-6">
            <code
              id="metatags"
              className="mt-1 font-mono relative w-full min-h-[100%] p-6 rounded-lg text-slate-100 bg-slate-800 border-transparent focus:border-slate-900 focus:ring-0"
            >
              <MetaCharsetTag />
              <MetaTag
                name="viewport"
                content="width=device-width,initial-scale=1"
              />
              <MetaTag name="theme-color" content={themeColor || "#ffffff"} />
              <TitleTag title={title} />
              <MetaTag name="title" content={title} />
              <MetaTag name="robots" content="index, follow" />
              <MetaTag
                className="block mb-10"
                name="description"
                content={description}
              />

              <MetaTag property="og:type" content={objectType} />
              {objectType === "article" && (
                <>
                  {publishedTime && (
                    <MetaTag
                      property="article:published_time"
                      content={publishedTime}
                    />
                  )}
                  {modifiedTime && (
                    <MetaTag
                      property="article:modified_time"
                      content={modifiedTime}
                    />
                  )}
                  {expirationTime && (
                    <MetaTag
                      property="article:expiration_time"
                      content={expirationTime}
                    />
                  )}
                </>
              )}
              {objectType === "profile" && (
                <>
                  {profileFirstName && (
                    <MetaTag
                      property="profile:first_name"
                      content={profileFirstName}
                    />
                  )}
                  {profileLastName && (
                    <MetaTag
                      property="profile:last_name"
                      content={profileLastName}
                    />
                  )}
                  {profileUsername && (
                    <MetaTag
                      property="profile:username"
                      content={profileUsername}
                    />
                  )}
                  {profileGender && (
                    <MetaTag
                      property="profile:gender"
                      content={profileGender}
                    />
                  )}
                </>
              )}
              <MetaTag property="og:url" content={url} />
              <MetaTag property="og:title" content={title} />
              <MetaTag property="og:description" content={description} />
              <MetaTag
                property="og:image"
                content={imageUrl || "ADD YOUR IMAGE URL HERE"}
              />
              <MetaTag property="og:locale" content={locale} />
              <MetaTag
                className="block mb-10"
                property="og:site_name"
                content={siteName || title}
              />

              <MetaTag property="twitter:card" content="summary_large_image" />
              <MetaTag property="twitter:url" content={url} />
              <MetaTag property="twitter:title" content={title} />
              <MetaTag property="twitter:description" content={description} />
              <MetaTag
                property="twitter:image"
                content={imageUrl || "ADD YOUR IMAGE URL HERE"}
              />

              <button
                className="mt-8 float-right md:mt-0 md:absolute md:bottom-6 md:right-6 bg-slate-500 p-2 rounded-lg font-body hover:bg-slate-400"
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
    </div>
  );
};

export default Complete;
