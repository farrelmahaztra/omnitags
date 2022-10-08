import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Preview from "../../../components/Preview";
import TextInput from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";
import FormItem from "../../../components/FormItem";
import {
  handleTitle,
  handleDescription,
  handleUrl,
  handleImageUrl,
  handleObjectType,
} from "./actions";
import ogTypes from "./ogtypes.json";

const Basic = ({ state, dispatch }) => {
  const { title, description, url, imageUrl, objectType, siteName } = state;

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-auto flex-col md:flex-row md:max-h-[92vh]">
        <Sidebar activeTab={"basic"} />
        <div className="flex flex-auto flex-col md:flex-row md:w-11/12 border border-slate-200 overflow-hidden">
          <div className="flex flex-col md:w-2/5 border-r p-6">
            <FormItem
              label="Title"
              tooltip="Defines the document's title, shown in the browser tab and almost always shown in search results and link unfurls (recommended <=64 characters)"
            >
              <TextInput
                onChange={(e) => handleTitle(dispatch, e)}
                value={title || ""}
              />
            </FormItem>
            <FormItem
              label="Description"
              tooltip="Defines the document's description, snippets of which are often used in search results or link unfurls (recommended <=155 characters)"
            >
              <textarea
                className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
                placeholder=""
                rows="4"
                onChange={(e) => handleDescription(dispatch, e)}
                value={description || ""}
              />
            </FormItem>
            <FormItem
              label="Website URL"
              tooltip="Defines the document's URL, sometimes used in search results or link unfurls"
            >
              <TextInput
                onChange={(e) => handleUrl(dispatch, e)}
                value={url || ""}
              />
            </FormItem>
            <FormItem
              label="Image URL"
              tooltip="Defines the document's primary image URL, sometimes used in link unfurls"
            >
              <TextInput
                onChange={(e) => handleImageUrl(dispatch, e)}
                value={imageUrl || ""}
              />
            </FormItem>
            <FormItem
              label="Object Type"
              tooltip="Defines the document's object type as per OpenGraph specifications"
            >
              <SelectInput
                onChange={(e) => handleObjectType(dispatch, e)}
                value={objectType || ""}
                options={ogTypes}
              />
            </FormItem>
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
    </div>
  );
};

export default Basic;
