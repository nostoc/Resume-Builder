import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
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
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100 font-outfit">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 w-full max-w-md">
      <div className="flex items-center justify-center gap-1 mb-6">
          <img
            src="../../public/icon.svg"
            alt="Eazy Rezume"
            className="w-10 h-10"
          />
          <h1 className="text-4xl font-bold text-ash-blue">
            Eazy Rezume
          </h1>
        </div>
        <p className="text-lg text-gray-600 text-center mb-8">Create your account</p>
        
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-slate-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-ash-blue"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-ash-blue"
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
              className="bg-slate-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-ash-blue w-full"
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
            className="bg-ash-blue text-white  hover:bg-white border-2 border-transparent hover:border-ash-blue hover:text-ash-blue rounded-full px-3 py-3 transition-all duration-300 ease-in-out text-xl "
          >
            Register
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            By creating an account, you agree to our <Link to="/terms" className="text-ash-blue hover:underline">Terms and Conditions</Link>.
          </p>

          <div className="flex gap-2 mt-5 justify-center">
            <p>Already have an account?</p>
            <Link to="/login">
              <span className="text-ash-blue font-semibold hover:underline">
                Sign In
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
