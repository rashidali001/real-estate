import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/profile' element={<Profile />}/>


    </Routes>
  </BrowserRouter>
}
