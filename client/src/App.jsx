import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProfileCreation from "./components/Profile/ProfileCreation";

import "./App.css";

function App() {
  return (
    <Routes>
      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/create" element={<ProfileCreation />} />
      
    </Routes>
  );
}

export default App;
