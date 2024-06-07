import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      try {
        const { data } = await axios.post(
          "http://localhost:5000",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        if (status) {
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
  
  return (
    <>
      <div className=" font-montserrat flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h4 className="text-xl mb-4">
            Welcome <span className="font-bold">{username}</span>
          </h4>
          <button onClick={Logout} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200">LOGOUT</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
