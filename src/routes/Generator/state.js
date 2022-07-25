export const initialState = {
  image: "",
  title: "OmniTags",
  description:
    "Meta tags can be a hassle — it's hard to keep track of which ones help or hurt your SEO ranking. Our tool makes sure your business's website serves up the right tags and unfurls perfectly on every platform.",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGE":
      return { ...state, image: action.value };
    case "SET_TITLE":
      return { ...state, title: action.value };
    case "SET_DESCRIPTION":
      return { ...state, description: action.value };
  }
};
