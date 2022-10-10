import Layout from "../../components/Layout";

const About = () => (
  <Layout>
    <div className="container p-12 flex flex-col flex-1">
      <h2 className="text-2xl sm:text-3xl md:text-4xl sm:w-2/3 md:w-3/4 my-8 font-title">
        About OmniTags.app
      </h2>
      <p className="text-lg mb-6 sm:w-3/4 lg:w-1/2 font-body text-slate-600">
        This website is a free metadata HTML tag generator that is meant to
        simplify the process of declaring your document's metadata to search
        engines and other services that use meta tags to display information
        about your website.
      </p>
      <p className="text-lg mb-6 sm:w-3/4 lg:w-1/2 font-body text-slate-600">
        The form fields on this website will be kept up to date as often as
        possible to reflect changes in which meta tags are important to have, as
        they sometimes become deprecated or become a negative SEO signal despite
        still being shown in popular meta tag generators and SEO tutorial
        articles (e.g. the keywords tag).
      </p>
      <h3 className="text-xl sm:text-2xl md:text-3xl sm:w-2/3 md:w-3/4 my-8 font-title">
        Any questions?
      </h3>
      <p className="text-lg mb-6 sm:w-3/4 lg:w-1/2 font-body text-slate-600">
        If you have any questions, feedback, or feature requests, please email
        me at hello [at] farrelmahaztra.com. I'll get back to you as soon as I
        can!
      </p>
      <h3 className="text-xl sm:text-2xl md:text-3xl sm:w-2/3 md:w-3/4 my-8 font-title">
        Attributions
      </h3>
      <p className="text-lg mb-6 sm:w-3/4 lg:w-1/2 font-body text-slate-600">
        Inspired by{" "}
        <a className="font-bold" href="https://metatags.io">
          metatags.io
        </a>
        . This website uses the{" "}
        <a className="font-bold" href="https://tailwindcss.com/">
          Tailwind CSS
        </a>{" "}
        framework. The default image uses a photo by{" "}
        <a
          className="font-bold"
          href="https://unsplash.com/@mjessier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Myriam Jessier
        </a>{" "}
        on{" "}
        <a
          className="font-bold"
          href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
        .
      </p>
    </div>
  </Layout>
);

export default About;
