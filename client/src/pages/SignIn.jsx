import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/eazy-rezume/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="px-3 max-w-lg mx-auto font-montserrat">
      <h1 className=" text-3xl  text-center font-extrabold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className=" bg-purple-50 p-3 rounded-lg font-sans"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className=" bg-purple-50 p-3 rounded-lg font-sans"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-3 rounded-lg font-sans font-bold hover:opacity-95 disabled:opacity-85"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        
      </form>
      <div className=" flex gap-2 mt-5">
        <p>Don&rsquo;t have an account?</p>
        <Link to="/sign-up">
          <span className="text-purple-800 font-semibold">Sign Up</span>
        </Link>
      </div>
      <p className=" text-red-700 mt-5"> {error ? error.message || 'Something went wrong!' : ''}</p>
    </div>
  );
};

export default SignIn;
