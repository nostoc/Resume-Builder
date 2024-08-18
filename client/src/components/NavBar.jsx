import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-white font-outfit text-xl shadow-lg">
      <div className="container flex justify-between items-center max-w-6xl bg-light-blue m-auto p-4">
        <div className="flex items-center gap-1">
          <Link to="/">
            <img
              src="../../public/icon.svg"
              alt="Eazy Rezume"
              className="w-10 h-10"
            />
          </Link>
          <Link to="/">
            <h1 className="font-bold text-slate-800 text-xl">Eazy Rezume</h1>
          </Link>
        </div>
        <div className="flex items-center justify-end flex-wrap-nowrap">
          <ul className="flex gap-5 items-center text-slate-800">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/login">
              <li>
                <button className="bg-ash-blue text-white hover:bg-ash-blue hover:text-black   rounded-full px-3 p-1 transition-all duration-300 ease-in-out text-xl">
                  Login
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
