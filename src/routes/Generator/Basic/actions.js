export const handleTitle = (dispatch, e) => {
  dispatch({
    type: "SET_TITLE",
    value: e.target.value,
  });
};

export const handleDescription = (dispatch, e) => {
  dispatch({
    type: "SET_DESCRIPTION",
    value: e.target.value,
  });
};

export const handleUrl = (dispatch, e) => {
  dispatch({ type: "SET_URL", value: e.target.value });
};

export const handleImageUrl = (dispatch, e) => {
  dispatch({
    type: "SET_IMAGE_URL",
    value: e.target.value,
  });
};

export const handleObjectType = (dispatch, e) => {
  dispatch({
    type: "SET_OBJECT_TYPE",
    value: e.target.value,
  });
};
