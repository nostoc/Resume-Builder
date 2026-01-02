import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRegistered = useSelector((state) => state.auth.isRegistered);

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <div className="shadow-lg w-full bg-white">
      <div className="font-outfit text-xl">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-1">
            <Link to="/">
              <img src="/icon.svg" alt="Eazy Rezume" className="w-10 h-10" />
            </Link>
            <Link to="/">
              <h1 className="font-bold text-slate-800 text-xl">Eazy Rezume</h1>
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <ul className="flex gap-5 items-center text-slate-800">
              <Link to="/">
                <li className="hover:text-ash-blue transition-colors cursor-pointer">Home</li>
              </Link>
              {isRegistered ? (
                <>
                  <Link to="/view-resumes">
                    <li className="hover:text-ash-blue transition-colors cursor-pointer">My Resumes</li>
                  </Link>
                  <Link to="/profile/create">
                    <li className="hover:text-ash-blue transition-colors cursor-pointer">Create Resume</li>
                  </Link>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 text-white hover:bg-white border-2 border-transparent hover:border-red-500 hover:text-red-500 rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <Link to="/login">
                  <li>
                    <button className="bg-ash-blue text-white hover:bg-white border-2 border-transparent hover:border-ash-blue hover:text-ash-blue rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg">
                      Login
                    </button>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
