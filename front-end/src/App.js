import './App.css';
import React, { useState } from 'react';
import Registration from './Registration';
import Userlogin from './Userlogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import MyBookings from './Home/MyBookings';
import { BrowserRouter as Router, Route, Routes, RouteElement,Navigate } from 'react-router-dom';
import Userdashboard from './Userdashboard';
import AdminLogin from './AdminLogin'
import AdminHome from './AdminHome'
import AllUsers from './AllUsers';
// import './Userlogin.css'
// import image from "./img/loginbackground.jpg"; 


function App() {

  const [userId, setUserId] = useState(null);

  return (
    
    <Router>
        <Routes>
        <Route path="/Adminlogin" element={<AdminLogin/>} />
        <Route path="/AllUsers" element={<AllUsers/>} />
        <Route path="/AdminHome" element={<AdminHome/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/login" element={<Userlogin/>} />
          <Route path="/reg" element={<Registration/>} />
          <Route path="/MyBookings" element={<MyBookings/>} />

        </Routes>
        
    </Router>
   
  );
}

export default App;
