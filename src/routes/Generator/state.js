export const initialState = {
  title: "OmniTags - Meta Tag Generator",
  description:
    "Meta tags can be a hassle — it's hard to keep track of which ones help or hurt your SEO ranking. Our tool makes sure your business's website serves up the right tags and unfurls perfectly on every platform.",
  url: "https://omnitags.io",
  imageUrl: "",
  objectType: "website",
  siteName: "OmniTags",
  locale: "en_US",
  publishedTime: "",
  modifiedTime: "",
  expirationTime: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGE":
      return { ...state, image: action.value };
    case "SET_TITLE":
      return { ...state, title: action.value };
    case "SET_DESCRIPTION":
      return { ...state, description: action.value };
    case "SET_URL":
      return { ...state, url: action.value };
    case "SET_IMAGE_URL":
      return { ...state, imageUrl: action.value };
    case "SET_OBJECT_TYPE":
      return { ...state, objectType: action.value };
    case "SET_SITENAME":
      return { ...state, siteName: action.value };
    case "SET_LOCALE":
      return { ...state, locale: action.value };
    case "SET_PUBLISHED_TIME":
      return { ...state, locale: action.value };
    case "SET_MODIFIED_TIME":
      return { ...state, locale: action.value };
    case "SET_EXPIRATION_TIME":
      return { ...state, locale: action.value };
  }
};
