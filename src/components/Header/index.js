import { Link } from "react-router-dom";

const Header = () => (
  <header className="flex h-[8vh]">
    <nav className="relative z-50 flex mx-6 md:mx-12 w-full justify-between md:justify-start items-center">
      <Link to="/">
        <h1 className="text-3xl text-slate-900 font-title mr-12">
          Omni<span className="text-[#3b82f6]">Tags</span>
        </h1>
      </Link>
      <div className="font-body md:flex gap-x-6 text-lg items-center">
        <Link
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          to="/about"
        >
          About
        </Link>
        <a
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          href="https://farrelmahaztra.com"
        >
          Contact
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
