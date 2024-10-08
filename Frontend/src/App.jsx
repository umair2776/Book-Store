import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Course from "./pages/Course"
import MainNavbar from './components/MainNavbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Signup from './components/Signup'
import { useAuth } from './context/AuthProvider'
const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    
    <MainNavbar/>
    
    
   <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={authUser ? <Course/> : <Navigate to='/signup'/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/signup' element={<Signup/>}/>

   </Routes>
   
    </>
  )
}

export default App
