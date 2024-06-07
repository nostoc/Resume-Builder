import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="px-3 max-w-lg mx-auto font-montserrat">
      <h1 className=" text-3xl  text-center font-extrabold my-7">
        Sign Up
      </h1>
      <form className="flex flex-col gap-5 ">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className=" bg-red-50 p-3 rounded-lg font-sans"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className=" bg-red-50 p-3 rounded-lg font-sans"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className=" bg-red-50 p-3 rounded-lg font-sans"
        />
        <button
          type="submit"
          className="bg-red-600 text-white py-3 rounded-lg font-sans font-bold hover:opacity-95 disabled:opacity-85"
        >
          Sign Up
        </button>
      </form>
      <div className=" flex gap-2 mt-5">
        <p>Already having an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
