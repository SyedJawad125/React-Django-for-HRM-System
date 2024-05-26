// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About' 
import Services from './pages/Services' 
import Department from './pages/Department' 
import Salary from './pages/Salary' 
import Position from './pages/Position' 
import Contact from './pages/contact'
import Adddepartment from './pages/Adddepartment';
import Updatedepartment from './pages/Updatedepartment'
import Addsalary from './pages/Addsalary';
import Updatesalary from './pages/Updatesalary';
import Addposition from './pages/Addposition';
import Updateposition from './pages/Updateposition';
import Login from './pages/Login ';
import SignUp from './pages/SignUp';
import ProtectedRoute from './context/ProtectedRoute'
// import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';


function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Check authentication status (this is a mock, replace with real authentication check)
  //   const checkAuthStatus = () => {
  //     const token = localStorage.getItem('authToken');
  //     if (token) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   };

  //   checkAuthStatus();
  // }, []);



//  <Navbar isLoggedIn={isLoggedIn} />


  return (
    <div>
       <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>}  />
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home/>}  />
          <Route path='/about' element={<About/>}  />
          <Route path='/services' element={<Services/>}  />
          <Route path='/department' element={<Department/>}  />
          <Route path='/salary' element={<Salary/>}  />
          <Route path='/position' element={<Position/>}  />
          <Route path='/contact' element={<Contact/>}  />
          <Route path='/add/Adddepartment' element={<Adddepartment/>}  />
          <Route path='/update/Updatedepartment' element={<Updatedepartment/>}  />
          <Route path='/add/Addsalary' element={<Addsalary/>}  />
          <Route path='/update/Updatesalary' element={<Updatesalary/>}  />
          <Route path='add/Addposition' element={<Addposition/>}  />
          <Route path='update/Updateposition' element={<Updateposition/>}  />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>

  )
}

export default App;
