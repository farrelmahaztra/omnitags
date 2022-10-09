import Layout from "../../../components/Layout";
import Preview from "../../../components/Preview";
import TextInput from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";
import DateInput from "../../../components/DateInput";
import ColorInput from "../../../components/ColorInput";
import FormItem from "../../../components/FormItem";
import {
  handleSitename,
  handleThemeColor,
  handleLocale,
  handlePublishedTime,
  handleModifiedTime,
  handleExpirationTime,
  handleProfileFirstName,
  handleProfileLastName,
  handleProfileUsername,
  handleProfileGender,
} from "./actions";
import locales from "./locales.json";

const Advanced = ({ state, dispatch }) => {
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
    <Layout tab="advanced" hasSidebar>
      <div className="flex flex-col md:w-2/5 border-r p-6">
        <FormItem
          label="Site name"
          tooltip="Defines the site name for the document, sometimes used in link unfurls"
        >
          <TextInput
            onChange={(e) => handleSitename(dispatch, e)}
            value={siteName || ""}
          />
        </FormItem>
        <FormItem
          label="Theme color"
          tooltip="Defines the theme color for the document, sometimes used to customize web browser UIs on the page."
        >
          <ColorInput
            onChange={(e) => handleThemeColor(dispatch, e)}
            value={themeColor || ""}
          />
        </FormItem>
        <FormItem
          label="Locale"
          tooltip="Defines the primary language of the document"
        >
          <SelectInput
            onChange={(e) => handleLocale(dispatch, e)}
            value={locale || ""}
            options={locales}
          />
        </FormItem>
        {objectType === "article" && (
          <>
            <FormItem
              label="Published time"
              tooltip="Defines when the article was published (for OpenGraph)"
            >
              <DateInput
                onChange={(e) => handlePublishedTime(dispatch, e)}
                value={publishedTime || null}
              />
            </FormItem>
            <FormItem
              label="Modified time"
              tooltip="Defines when the article was last modified (for OpenGraph)"
            >
              <DateInput
                onChange={(e) => handleModifiedTime(dispatch, e)}
                value={modifiedTime || null}
              />
            </FormItem>
            <FormItem
              label="Expiration time"
              tooltip="Defines when the article goes out of date (for OpenGraph)"
            >
              <DateInput
                onChange={(e) => handleExpirationTime(dispatch, e)}
                value={expirationTime || null}
              />
            </FormItem>
          </>
        )}
        {objectType === "profile" && (
          <>
            <FormItem
              label="Profile first name"
              tooltip="Defines the first name of the user (for OpenGraph)"
            >
              <TextInput
                onChange={(e) => handleProfileFirstName(dispatch, e)}
                value={profileFirstName || ""}
              />
            </FormItem>
            <FormItem
              label="Profile last name"
              tooltip="Defines the last name of the user (for OpenGraph)"
            >
              <TextInput
                onChange={(e) => handleProfileLastName(dispatch, e)}
                value={profileLastName || ""}
              />
            </FormItem>
            <FormItem
              label="Profile username"
              tooltip="Defines the user's username (for OpenGraph)"
            >
              <TextInput
                onChange={(e) => handleProfileUsername(dispatch, e)}
                value={profileUsername || ""}
              />
            </FormItem>
            <FormItem
              label="Profile gender"
              tooltip="Defines the user's gender (for OpenGraph)"
            >
              <SelectInput
                onChange={(e) => handleProfileGender(dispatch, e)}
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
            </FormItem>
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
    </Layout>
  );
};

export default Advanced;
