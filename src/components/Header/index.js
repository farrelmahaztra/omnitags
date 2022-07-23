function Header() {
  return (
    <header className="py-10">
        <nav className="relative z-50 flex mx-12 justify-start items-center">
          <h1 className="text-3xl text-slate-900 font-title mr-12">
            Omni<span className="text-blue-600">Tags</span>
          </h1>
          <div className="font-body md:flex md:gap-x-6 items-center">
            <a className="rounded-lg px-2 py-2 hover:bg-blue-100 hover:text-blue-800" href="#">About</a>
            <a className="rounded-lg px-2 py-2 hover:bg-blue-100 hover:text-blue-800" href="#">Contact</a>
            <a className="rounded-lg px-2 py-2 hover:bg-blue-100 hover:text-blue-800" href="#">Donate</a>
          </div>
        </nav>
    </header>
  );
}

export default Header;
