export const initialState = {
  image: "",
  title: "",
  description: "",
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
