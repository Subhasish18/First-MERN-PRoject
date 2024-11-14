import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Pages/Register'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default App
