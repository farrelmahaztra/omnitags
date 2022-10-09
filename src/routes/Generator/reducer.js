export const initialState = {
  title: "OmniTags - Meta Tag Generator",
  description:
    "Meta tags can be a hassle — it's hard to keep track of which ones help or hurt your SEO ranking. Our tool makes sure your business's website serves up the right tags and unfurls perfectly on every platform.",
  url: "https://omnitags.app",
  imageUrl: "",
  objectType: "website",
  siteName: "OmniTags",
  themeColor: "#3b82f6",
  locale: "en_US",
  publishedTime: "",
  modifiedTime: "",
  expirationTime: "",
  profileFirstName: "",
  profileLastName: "",
  profileUsername: "",
  profileGender: "male",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return { ...state };
  }
};
