import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-10">
      <nav className="relative z-50 flex mx-12 justify-start items-center">
        <Link to="/">
          <h1 className="text-3xl text-slate-900 font-title mr-12">
            Omni<span className="text-blue-600">Tags</span>
          </h1>
        </Link>
        <div className="font-body md:flex md:gap-x-6 text-lg items-center">
          <Link
            className="rounded-lg px-2 py-2 hover:bg-blue-100 hover:text-blue-800"
            to="/about"
          >
            About
          </Link>
          <Link
            className="rounded-lg px-2 py-2 hover:bg-blue-100 hover:text-blue-800"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="rounded-lg px-2 py-2 hover:bg-blue-100 hover:text-blue-800"
            to="/donate"
          >
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
