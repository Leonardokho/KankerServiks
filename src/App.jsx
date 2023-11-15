import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login.jsx";
// import Daftar from "./Daftar";
import Login from "./Components/Login.jsx";
import Daftar from "./Components/Daftar.jsx";
import HeaderMain from "./Components/landing_page/headermain_landingpage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HeaderMain/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
