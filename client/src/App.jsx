import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProfileCreation from "./components/Profile/ProfileCreation";
import LandingPage from "./pages/LandingPage";
import Resume from "./components/Resume";
import "./App.css";
import { useSelector } from "react-redux";
import ViewResumes from "./pages/ViewResumes";
import ResumeList from "./components/ResumeList";
import Home from "./pages/Home";
import LandingPage2 from "./pages/LandingPage2";

function App() {
  const isRegistered = useSelector((state) => state.auth.isRegistered);
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/on-board" element={<LandingPage2 />} />
     <Route
        path="/profile/create"
        element={isRegistered ? <ProfileCreation /> : <Navigate to="/login" />}
      />
      
      <Route path="/profile/resume" element={<Resume />} />
      <Route
        path="/view-resumes"
        element={isRegistered ? <ViewResumes /> : <Navigate to="/login" />}
      />
      <Route path="/resumes" element={<ResumeList />} />
    </Routes>
  );
}

export default App;
