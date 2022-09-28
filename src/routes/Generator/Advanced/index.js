import ReactTooltip from "react-tooltip";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Preview from "../../../components/Preview";
import TextInput from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";
import DateInput from "../../../components/DateInput";
import ColorInput from "../../../components/ColorInput";
import locales from "./locales.json";

function Advanced({ state, dispatch }) {
  const {
    title,
    description,
    url,
    imageUrl,
    siteName,
    themeColor,
    locale,
    objectType,
    publishedTime,
    modifiedTime,
    expirationTime,
    profileFirstName,
    profileLastName,
    profileUsername,
    profileGender,
  } = state;

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-auto flex-col md:flex-row md:max-h-[92vh]">
        <Sidebar activeTab={"advanced"} />
        <div className="flex flex-auto flex-col md:flex-row md:w-11/12 border border-slate-200">
          <div className="flex flex-col md:w-2/5 border-r p-6">
            <label className="block mb-5">
              <span
                className="text-slate-800"
                data-tip="Defines the site name for the document, sometimes used in link unfurls"
              >
                Site name
              </span>
              <TextInput
                onChange={(e) =>
                  dispatch({
                    type: "SET_SITENAME",
                    value: e.target.value,
                  })
                }
                value={siteName || ""}
              />
            </label>
            <label className="block mb-5">
              <span
                className="text-slate-800"
                data-tip="Defines the theme color for the document, sometimes used to customize web browser UIs on the page."
              >
                Theme color
              </span>
              <ColorInput
                onChange={(e) =>
                  dispatch({
                    type: "SET_THEME_COLOR",
                    value: e.target.value,
                  })
                }
                value={themeColor || ""}
              />
            </label>
            <label className="block mb-5">
              <span
                className="text-slate-800"
                data-tip="Defines the primary language of the document"
              >
                Locale
              </span>
              <SelectInput
                onChange={(e) =>
                  dispatch({
                    type: "SET_LOCALE",
                    value: e.target.value,
                  })
                }
                value={locale || ""}
                options={locales}
              />
            </label>
            {objectType === "article" && (
              <>
                <label className="block mb-5">
                  <span
                    className="text-slate-800"
                    data-tip="Defines when the article was published (for OpenGraph)"
                  >
                    Published Time
                  </span>
                  <DateInput
                    onChange={(e) =>
                      dispatch({
                        type: "SET_PUBLISHED_TIME",
                        value: e.target.value,
                      })
                    }
                    value={publishedTime || null}
                  />
                </label>
                <label className="block mb-5">
                  <span
                    className="text-slate-800"
                    data-tip="Defines when the article was last modified (for OpenGraph)"
                  >
                    Modified Time
                  </span>
                  <DateInput
                    onChange={(e) =>
                      dispatch({
                        type: "SET_MODIFIED_TIME",
                        value: e.target.value,
                      })
                    }
                    value={modifiedTime || null}
                  />
                </label>
                <label className="block mb-5">
                  <span
                    className="text-slate-800"
                    data-tip="Defines when the article goes out of date (for OpenGraph)"
                  >
                    Expiration Time
                  </span>
                  <DateInput
                    onChange={(e) =>
                      dispatch({
                        type: "SET_EXPIRATION_TIME",
                        value: e.target.value,
                      })
                    }
                    value={expirationTime || null}
                  />
                </label>
              </>
            )}
            {objectType === "profile" && (
              <>
                <label className="block mb-5">
                  <span
                    className="text-slate-800"
                    data-tip="Defines the first name of the user (for OpenGraph)"
                  >
                    Profile First Name
                  </span>
                  <TextInput
                    onChange={(e) =>
                      dispatch({
                        type: "SET_PROFILE_FIRST_NAME",
                        value: e.target.value,
                      })
                    }
                    value={profileFirstName || ""}
                  />
                </label>
                <label className="block mb-5">
                  <span
                    className="text-slate-800"
                    data-tip="Defines the last name of the user (for OpenGraph)"
                  >
                    Profile Last Name
                  </span>
                  <TextInput
                    onChange={(e) =>
                      dispatch({
                        type: "SET_PROFILE_LAST_NAME",
                        value: e.target.value,
                      })
                    }
                    value={profileLastName || ""}
                  />
                </label>
                <label className="block mb-5">
                  <span
                    className="text-slate-800"
                    data-tip="Defines the user's username (for OpenGraph)"
                  >
                    Profile Username
                  </span>
                  <TextInput
                    onChange={(e) =>
                      dispatch({
                        type: "SET_PROFILE_USERNAME",
                        value: e.target.value,
                      })
                    }
                    value={profileUsername || ""}
                  />
                </label>
                <label className="block mb-5">
                  <span
                    className="text-slate-800"
                    data-tip="Defines the user's gender (for OpenGraph)"
                  >
                    Profile Gender
                  </span>
                  <SelectInput
                    onChange={(e) =>
                      dispatch({
                        type: "SET_PROFILE_GENDER",
                        value: e.target.value,
                      })
                    }
                    value={profileGender || ""}
                    options={[
                      {
                        value: "male",
                        label: "Male",
                      },
                      {
                        value: "female",
                        label: "Female",
                      },
                    ]}
                  />
                </label>
              </>
            )}
          </div>
          <div className="flex flex-col md:w-3/5 p-6 md:overflow-y-scroll">
            <Preview
              title={title}
              description={description}
              url={url}
              imageUrl={imageUrl}
              siteName={siteName}
            />
          </div>
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
}

export default Advanced;
