import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/undraw_online_cv_re_gn0a.svg"; 

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-8 md:p-16">
        <div className=" inset-0 w-full h-full">
          <img
            src={BackgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-full md:w-1/2 text-center md:text-left font-montserrat">
          <h1 className="text-4xl text-ocean-blue font-bold mb-4">
            Eazy Rezume
          </h1>
          <p className="text-lg mb-8">Resume in minutes!!</p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start">
            <Link to="/register" className="mb-4 md:mb-0 md:mr-4 font-semibold">
              <button className=" flex items-center justify-center bg-ocean-blue text-white py-2 px-4 rounded hover:opacity-95">
                <FaUserPlus className="mr-4" />
                Register
              </button>
            </Link>
            <Link to="/login">

              <button className=" flex items-center justify-center bg-ocean-blue text-white py-2 px-4 rounded hover:opacity-95 font-semibold">
                <FaSignInAlt className="mr-4" />
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
