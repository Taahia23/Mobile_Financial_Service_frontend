// import React from 'react';
// import './App.css';
// import LoginPage from './pages/LoginPage';

// function App() {
//   return (
//     <>
//       <LoginPage />
//       <h1>Taahia Tahsin</h1>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage/>} />

    </Routes>
  );
}

export default App;
