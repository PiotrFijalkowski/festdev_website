import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages';
import Kontakt from './pages/kontakt';

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/kontakt" element={<Kontakt />}  /> 
      </Routes>
    </Router>
  );
}

export default App;
