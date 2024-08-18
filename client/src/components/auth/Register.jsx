import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";

import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email.includes("@")) {
      errors.email = "Email must include '@'.";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    if (!username) {
      errors.username = "Username is required.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = () => {
    if (validate()) {
      dispatch(registerUser({ username, email, password }, navigate));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 py-6 ">
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg  md:p-48">
        

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
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-purple-50 p-4 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-ocean-blue"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
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
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <button
              onClick={handleRegister}
              className="bg-ocean-blue text-white py-3 rounded-lg font-sans font-bold hover:bg-ocean-blue-dark focus:outline-none focus:ring-2 focus:ring-ocean-blue focus:ring-opacity-50 transition duration-200"
            >
              Register
            </button>
            <div className="flex gap-2 mt-5 justify-center">
              <p>Already have an account?</p>
              <Link to="/login">
                <span className="text-ocean-blue font-semibold hover:underline">
                  Sign In
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
