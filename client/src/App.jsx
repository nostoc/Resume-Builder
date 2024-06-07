import {Route, Routes} from 'react-router-dom'
import {Login,Signup} from './pages'
import {Home} from './pages'
import './App.css'
//import ProtectedRoute from './components/ProtectedRoute'
 
function App() {
 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
