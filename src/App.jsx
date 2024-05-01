import './global.css'
import {Routes, Route } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Login from './Pages/LoginPage/Login'
import Register from './Pages/RegisterPage/Register'
import Navbar from './Components/Navbar'
import Mypage from './Pages/MyPage/Mypage'
import Friend from './Pages/FriendPage/Friend'



function App() {
 

  return (
   
      <div className='appContainer'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/mypage" element={
                    <Mypage />
                } />
        </Routes>
      </div>
       
  
  )
}

export default App
