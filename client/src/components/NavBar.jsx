import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="shadow-lg w-full">
      <div className="bg-white font-outfit text-xl">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-1">
            <Link to="/">
              <img
                src="/icon.svg"
                alt="Eazy Rezume"
                className="w-10 h-10"
              />
            </Link>
            <Link to="/">
              <h1 className="font-bold text-slate-800 text-xl">Eazy Rezume</h1>
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <ul className="flex gap-5 items-center text-slate-800">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/login">
                <li>
                  <button className="bg-ash-blue text-white hover:bg-white border-2 border-transparent hover:border-ash-blue hover:text-ash-blue rounded-full px-3 py-1 transition-all duration-300 ease-in-out text-xl">
                    Login
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
