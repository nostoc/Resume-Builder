import { Link } from "react-router-dom";
import { FaUserEdit, FaRegFileAlt, FaSignOutAlt } from "react-icons/fa";
import backgroundImage from "../assets/undraw_welcoming_re_x0qo.svg";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/actions/authActions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <div className="container flex items-center justify-center font-outfit min-h-screen ">
      <div className="container w-full  relative flex flex-col md:flex-row items-center justify-between bg-white shadow-lg  overflow-hidden ">
        {/* Left Side with Background Image */}
        <div className="hidden md:block md:w-1/2 h-full">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side with Options */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
          <div className="text-center w-full mb-8">
            <h1 className="text-4xl text-ocean-blue font-bold mb-4">
              Welcome to the Resume Builder App
            </h1>
            <p className="text-lg text-gray-600">
              Create your professional resume with ease using our templates and
              tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Link to="/profile/create" className="group">
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <FaUserEdit className="text-ocean-blue text-3xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-700 text-center">
                  Fill Profile Form
                </h3>
              </div>
            </Link>

            <Link to="/resumes" className="group">
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <FaRegFileAlt className="text-ocean-blue text-3xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-700 text-center">
                  View Resumes
                </h3>
              </div>
            </Link>

            <button
              onClick={handleLogout}
              className="group w-full flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <FaSignOutAlt className="text-ocean-blue text-3xl mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-gray-700 text-center">
                Logout
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
