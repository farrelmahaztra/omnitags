import Google from "./Google";
import Twitter from "./Twitter";
import Slack from "./Slack";

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
      <Slack title={title} description={description} imageUrl={imageUrl} />
    </>
  );
}

export default Preview;
