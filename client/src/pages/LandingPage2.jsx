import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/actions/authActions";

const LandingPage2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <div className=" container font-outfit my-6 flex flex-col">
      {/* Top Section with Icon, Text, and Button */}
      <div className="w-screen shadow-lg p-4 flex items-center justify-between mb-6 fixed top-0 left-0 bg-white z-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          <button
            className="bg-red-500 text-white hover:bg-white border-2 border-transparent hover:border-red-500 hover:text-red-500 rounded-full py-1 px-6 transition-all duration-300 ease-in-out text-xl"
            onClick={handleLogout}
          >
            Exit
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 mt-20">
        {/* Text Section */}
        <div className="flex-1 flex flex-col items-start md:mb-0 pr-4">
          <h2 className="text-5xl md:text-6xl text-slate-900 font-outfit mt-0 mb-10 font-bold">
            Just three simple steps.
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-lg text-slate-700 mb-8">
            <li className="relative pl-6 font-semibold text-xl">
            Enter your details to create a personalized resume that highlights your strengths.
            </li>
            <li className="relative pl-6 font-semibold text-xl">
            Pick a professional template that suits your style and career goals.
            </li>
            <li className="relative pl-6 font-semibold text-xl">
            Download your resume, print it, and get ready to impress employers.
            </li>
          </ol>
          <Link to="/profile/create">
            <button className="bg-ash-blue text-white hover:bg-white hover:text-ash-blue border-2 border-transparent hover:border-ash-blue rounded-full px-6 py-3 transition-all duration-300 ease-in-out text-xl ml-4 mt-4">
              Create My Resume
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="../../src/assets/1.png"
            alt="on-board image"
            className="w-full max-w-md h-auto object-cover container shadow-xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
