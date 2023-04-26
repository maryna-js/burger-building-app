import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import BurgerApp from './components/BurgerApp/BurgerApp';
import React from 'react';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<BurgerApp />} />
      </Routes>
    </>
  );
};

export default App;
