import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Components/calculator';
import Home from './Components/home';
import Navbar from './Components/navbar';
import Quote from './Components/quote';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
      <Route path="*" element={<div style={{ color: 'red', fontSize: '50px' }}>ERROR PAGE NOT EXIST</div>} />
    </Routes>
  </BrowserRouter>

);

export default App;
