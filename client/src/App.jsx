import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProfileCreation from "./components/Profile/ProfileCreation";
import Home from "./pages/Home";
import Resume from "./components/Resume";
import "./App.css";
import { useSelector } from "react-redux";


function App() {
  const isRegistered = useSelector((state) => state.auth.isRegistered);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile/create"
        element={isRegistered ? <ProfileCreation /> : <Navigate to="/login" />}
      />
      <Route path="/profile/resume" element={<Resume/>}/>
    </Routes>
  );
}

export default App;
