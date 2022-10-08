export const handleSitename = (dispatch, e) => {
  dispatch({
    type: "SET_SITENAME",
    value: e.target.value,
  });
};

export const handleThemeColor = (dispatch, e) => {
  dispatch({
    type: "SET_THEME_COLOR",
    value: e.target.value,
  });
};

export const handleLocale = (dispatch, e) => {
  dispatch({
    type: "SET_LOCALE",
    value: e.target.value,
  });
};

export const handlePublishedTime = (dispatch, e) => {
  dispatch({
    type: "SET_PUBLISHED_TIME",
    value: e.target.value,
  });
};

export const handleModifiedTime = (dispatch, e) => {
  dispatch({
    type: "SET_MODIFIED_TIME",
    value: e.target.value,
  });
};

export const handleExpirationTime = (dispatch, e) => {
  dispatch({
    type: "SET_EXPIRATION_TIME",
    value: e.target.value,
  });
};

export const handleProfileFirstName = (dispatch, e) => {
  dispatch({
    type: "SET_PROFILE_FIRST_NAME",
    value: e.target.value,
  });
};

export const handleProfileLastName = (dispatch, e) => {
  dispatch({
    type: "SET_PROFILE_LAST_NAME",
    value: e.target.value,
  });
};

export const handleProfileUsername = (dispatch, e) => {
  dispatch({
    type: "SET_PROFILE_USERNAME",
    value: e.target.value,
  });
};

export const handleProfileGender = (dispatch, e) => {
  dispatch({
    type: "SET_PROFILE_GENDER",
    value: e.target.value,
  });
};
