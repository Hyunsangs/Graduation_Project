import './global.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Login from './Pages/LoginPage/Login'
import Register from './Pages/RegisterPage/Register'
import Navbar from './Components/Navbar'
function App() {
 

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
       
    </>
  )
}

export default App
