import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import {Link} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="px-3 max-w-lg mx-auto font-montserrat">
      <h2 className="text-3xl  text-center font-extrabold my-7">Log in</h2>
      <div className='flex flex-col gap-5 '>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=" bg-purple-50 p-3 rounded-lg font-sans"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=" bg-purple-50 p-3 rounded-lg font-sans"
      />
      <button onClick={handleLogin} className="bg-purple-600 text-white py-3 rounded-lg font-sans font-bold hover:opacity-95 disabled:opacity-85">
        Login
      </button>
      <div className=" flex gap-2 mt-5">
        <p>Don&rsquo;t have an account?</p>
        <Link to="/register">
          <span className="text-purple-800 font-semibold">Register</span>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Login;
