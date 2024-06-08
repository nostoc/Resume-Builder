import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/eazy-rezume/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success == false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="px-3 max-w-lg mx-auto font-montserrat">
      <h1 className=" text-3xl  text-center font-extrabold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className=" bg-purple-50 p-3 rounded-lg font-sans"
          onChange={handleChange}
        />
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
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className=" flex gap-2 mt-5">
        <p>Already having an account?</p>
        <Link to="/sign-in">
          <span className="text-purple-800 font-semibold">Sign in</span>
        </Link>
      </div>
      <p className=" text-red-700 mt-5">{error && "Something went wrong!"}</p>
    </div>
  );
};

export default Signup;
