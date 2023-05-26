import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Orders from './components/Orders';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";





function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact index path='/' element={<Home />} />
        <Route path='Menu' element={<Menu />} />
        <Route path='Orders' element={<Orders />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;