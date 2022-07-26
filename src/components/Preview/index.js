import Google from "./Google";
import Twitter from "./Twitter";

function Preview({ title, description, url, imageUrl }) {
  return (
    <>
      <Google title={title} description={description} url={url} />
      <Twitter
        title={title}
        description={description}
        url={url}
        imageUrl={imageUrl}
      />
    </>
  );
}

export default Preview;
