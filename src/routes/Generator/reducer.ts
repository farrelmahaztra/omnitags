export interface State {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  objectType: string;
  siteName: string;
  themeColor: string;
  locale: string;
  publishedTime: string;
  modifiedTime: string;
  expirationTime: string;
  profileFirstName: string;
  profileLastName: string;
  profileUsername: string;
  profileGender: string;
}

export interface Action {
  type: string;
  payload: {
    key: string;
    value: string;
  };
}

export const initialState: State = {
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

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return { ...state };
  }
};
