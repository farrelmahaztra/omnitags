import Google from "./Google";
import Twitter from "./Twitter";
import Instagram from "./Instagram";
import Slack from "./Slack";
import LINE from "./LINE";

function Preview({ title, description, url, imageUrl, siteName }) {
  return (
    <>
      <Google title={title} description={description} url={url} />
      <Twitter
        title={title}
        description={description}
        url={url}
        imageUrl={imageUrl}
      />
      <Instagram
        title={title}
        description={description}
        url={url}
        imageUrl={imageUrl}
      />
      <Slack
        title={title}
        description={description}
        imageUrl={imageUrl}
        siteName={siteName}
      />
      <LINE
        title={title}
        description={description}
        imageUrl={imageUrl}
      />
    </>
  );
}

export default Preview;
