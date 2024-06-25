const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-50 flex min-h-24 w-full items-center justify-between px-20">
        <div>
          <h2 className="text-2xl font-extrabold">NovariaGame</h2>
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#gameplay">Gameplay</a>
            </li>
            <li>
              <a href="#characters">Characters</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#play"
            className="rounded-md bg-primary p-2 px-5 text-[14px] font-medium hover:text-textPrimary"
          >
            Play Now
          </a>
          <a href="#trailer" className="text-[14px]">
            Watch Trailer
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
