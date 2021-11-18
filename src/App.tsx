import React from 'react';
import {Routes, Route} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
