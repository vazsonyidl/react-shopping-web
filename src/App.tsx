import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
