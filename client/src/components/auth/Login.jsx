import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }, navigate));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100 font-outfit">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 w-full max-w-md">
        <h1 className="text-4xl font-bold text-ash-blue text-center mb-2">Eazy Rezume</h1>
        <p className="text-lg text-slate-600 text-center mb-8">Sign in to your account</p>
        
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-purple-50 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-ash-blue"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-purple-50 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-ash-blue w-full"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-600"
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="bg-ash-blue text-white  hover:bg-white border-2 border-transparent hover:border-slate-700 hover:text-black rounded-full px-3 py-3 transition-all duration-300 ease-in-out text-xl"
          >
            Login
          </button>

          <p className="text-sm text-slate-500 text-center  mt-4">
            By signing in, you agree to our <Link to="/terms" className="text-ash-blue hover:underline">Terms and Conditions</Link>.
          </p>

          <div className="flex gap-2 mt-5 justify-center">
            <p>Don&apos;t have an account?</p>
            <Link to="/register">
              <span className="text-ash-blue font-semibold hover:underline">
                Register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
