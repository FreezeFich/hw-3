import React from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import SignIn from './pages/SignIn/SignIn';


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
      </Routes  >
    </div>
  );
}

export default App;
