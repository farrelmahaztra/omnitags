import { useContext, useRef } from "react";
import Layout from "../../../components/Layout";
import { copyToClipboard } from "./utils";
import { GeneratorContext } from "../context";

interface TitleTagProps {
  title: string;
}

interface MetaTagProps {
  className?: string;
  name?: string;
  property?: string;
  content: string;
}

const Complete = () => {
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
  } = useContext(GeneratorContext);
  const codeBlockRef = useRef<HTMLElement | null>(null);

  const TitleTag = ({ title }: TitleTagProps) => (
    <span>
      &lt;
      <span className="text-red-500">title</span>&gt;{title}&lt;/
      <span className="text-red-500">title</span>&gt;
      <br />
    </span>
  );

  const MetaCharsetTag = () => (
    <span>
      &lt;
      <span className="text-red-500">meta</span> charset="
      <span className="text-blue-300">utf-8</span>"&gt;
      <br />
    </span>
  );

  const MetaTag = ({ name, property, content }: MetaTagProps) => {
    return (
      <span>
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
        <br />
      </span>
    );
  };

  return (
    <Layout hasSidebar>
      <div className="flex flex-col w-full p-6">
        <code
          id="metatags"
          ref={codeBlockRef}
          className="mt-1 font-mono relative w-full min-h-[100%] p-6 rounded-lg text-slate-100 bg-slate-800 border-transparent focus:border-slate-900 focus:ring-0 overflow-y-scroll"
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
          <MetaTag name="description" content={description} />
          <br />
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
                <MetaTag property="profile:gender" content={profileGender} />
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
          <MetaTag property="og:site_name" content={siteName || title} />
          <br />
          <MetaTag property="twitter:card" content="summary_large_image" />
          <MetaTag property="twitter:url" content={url} />
          <MetaTag property="twitter:title" content={title} />
          <MetaTag property="twitter:description" content={description} />
          <MetaTag
            property="twitter:image"
            content={imageUrl || "ADD YOUR IMAGE URL HERE"}
          />
        </code>
        <button
          className="w-full mt-4 md:w-fit md:mt-0 md:absolute md:bottom-12 md:right-12 bg-slate-500 p-2 rounded-lg font-body hover:bg-slate-400 text-white"
          onClick={() => {
            copyToClipboard(codeBlockRef);
          }}
        >
          Copy to clipboard
        </button>
      </div>
    </Layout>
  );
};

export default Complete;
