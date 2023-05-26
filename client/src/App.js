import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Orders from './components/Orders';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
import { Routes, Route } from "react-router-dom";





function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact index path='/' element={<Home />} />
        <Route path='Menu' element={<Pizza />} />
        <Route path='Orders' element={<Orders />} />
        <Route path='Pizza' element={<Pizza />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;