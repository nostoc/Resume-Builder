import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProfileCreation from "./components/Profile/ProfileCreation";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import TemplateSelection from "./pages/TemplateSelection";
import Resume from "./components/Resume";
import "./App.css";
import { useSelector } from "react-redux";
import GenerateResume from "./components/GenerateResume";

function App() {
  const isRegistered = useSelector((state) => state.auth.isRegistered);
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/profile/create"
        element={isRegistered ? <ProfileCreation /> : <Navigate to="/login" />}
      />
      <Route path="/templates" element={<TemplateSelection />} />
      <Route path="/profile/resume" element={<Resume />} />
      <Route path="/generate-resume" element={<GenerateResume />} />
    </Routes>
  );
}

export default App;
