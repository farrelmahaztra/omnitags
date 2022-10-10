import React from "react";
import Layout from "../../../components/Layout";
import Preview from "../../../components/Preview";
import TextInput from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";
import FormItem from "../../../components/FormItem";
import { State } from "../reducer";
import ogTypes from "./ogtypes.json";

interface BasicProps {
  state: State;
  dispatch: React.Dispatch<any>;
}

const Basic = ({ state, dispatch }: BasicProps) => {
  const { title, description, url, imageUrl, objectType, siteName } = state;

  const handleInput: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "UPDATE",
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  return (
    <Layout tab="basic" hasSidebar>
      <div className="flex flex-col md:w-2/5 border-r p-6">
        <FormItem
          label="Title"
          tooltip="Defines the document's title, shown in the browser tab and almost always shown in search results and link unfurls (recommended <=64 characters)"
        >
          <TextInput onChange={handleInput} name="title" value={title || ""} />
        </FormItem>
        <FormItem
          label="Description"
          tooltip="Defines the document's description, snippets of which are often used in search results or link unfurls (recommended <=155 characters)"
        >
          <textarea
            className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-slate-200 focus:ring-0"
            placeholder=""
            rows={4}
            onChange={handleInput}
            name="description"
            value={description || ""}
          />
        </FormItem>
        <FormItem
          label="Website URL"
          tooltip="Defines the document's URL, sometimes used in search results or link unfurls"
        >
          <TextInput onChange={handleInput} name="url" value={url || ""} />
        </FormItem>
        <FormItem
          label="Image URL"
          tooltip="Defines the document's primary image URL, sometimes used in link unfurls"
        >
          <TextInput
            onChange={handleInput}
            name="imageUrl"
            value={imageUrl || ""}
          />
        </FormItem>
        <FormItem
          label="Object Type"
          tooltip="Defines the document's object type as per OpenGraph specifications"
        >
          <SelectInput
            onChange={handleInput}
            name="objectType"
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
    </Layout>
  );
};

export default Basic;
