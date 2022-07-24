import { Link } from "react-router-dom"
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto py-12 px-6 text-center flex flex-col flex-1 items-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl sm:w-2/3 md:w-3/4 my-8 font-title">
          Generate your website's <code >&lt;meta&gt;</code> tags with a single click.
        </h2>
        <h3 className="text-lg mb-6 sm:w-3/4 lg:w-1/2 font-body text-slate-600">
          Meta tags can be a hassle &mdash; it's hard to keep track of which
          ones help or hurt your SEO ranking. Our tool makes sure your
          business's website serves up the right tags and unfurls perfectly on
          every platform.
        </h3>
        <Link className="rounded-lg text-lg px-2 py-2 bg-blue-200 text-blue-900 hover:bg-blue-100 font-body" to="/generator">Create your tags 🚀</Link>
      </div>
    </div>
  );
}

export default App;
