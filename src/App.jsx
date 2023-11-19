import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login_daftar/Login.jsx";
import Daftar from "./Components/Login_daftar/Daftar.jsx";
import Konsultasi_page from "./Components/konsultasi_page/Konsultasi_page.jsx";
import HeaderMain from "./Components/landing_page/headermain_landingpage/HeaderMain.jsx";
import Index from "./Components/layanan_kesehatan/Index.jsx";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HeaderMain />} />
          <Route path="/konsultasi_page" element={<Konsultasi_page />} />
          <Route path="/layanan-kesehatan" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
