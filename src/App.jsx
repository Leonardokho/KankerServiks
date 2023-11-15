import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Daftar from "./Components/Daftar.jsx";
// // import './App.css';


function App() {
  return (
    <>
   

      <Router>
       
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
