import { GeneratorState } from "../reducer";

export const copyToClipboard = ({
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
}: GeneratorState) => {
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
