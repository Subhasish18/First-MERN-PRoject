import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Pages/Register'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
// import LoginandRegister from './Pages/LoginandRegister';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/LoginandRegister" element={<LoginandRegister />}/> */}
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>

      </Routes>
    </Router>
  )
}

export default App
