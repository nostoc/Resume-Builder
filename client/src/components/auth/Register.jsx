import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import backgroundImage from "../../assets/undraw_sign_up_n6im.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    dispatch(registerUser({ username, email, password }, navigate));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-8 md:p-16">
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-full md:w-1/2 text-center md:text-left font-montserrat p-8 md:p-16">
          <h2 className="text-3xl text-ocean-blue font-bold mb-6">Register</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="bg-purple-50 p-4 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-ocean-blue"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-purple-50 p-4 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-ocean-blue"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-purple-50 p-4 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-ocean-blue w-full"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              onClick={handleRegister}
              className="bg-ocean-blue text-white py-3 rounded-lg font-sans font-bold hover:bg-ocean-blue-dark focus:outline-none focus:ring-2 focus:ring-ocean-blue focus:ring-opacity-50 transition duration-200"
            >
              Register
            </button>
            <div className="flex gap-2 mt-5 justify-center">
              <p>Already have an account?</p>
              <Link to="/login">
                <span className="text-ocean-blue font-semibold hover:underline">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
