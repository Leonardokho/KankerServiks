import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login_daftar/Login.jsx";
import Daftar from "./Components/Login_daftar/Daftar.jsx";
import Konsultasi_page from "./Components/konsultasi_page/Konsultasi_page.jsx";
import HeaderMain from "./Components/landing_page/headermain_landingpage/HeaderMain.jsx";
import ArtikelMain from "./Components/artikel/artikel_main/ArtikelMain.jsx";
import LayananKesehatan from "./Components/layanan_kesehatan/Index.jsx";
import ArtikelSpecsMain from "./Components/artikel_specs/artikel_specs_main/ArtikelSpecsMain.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HeaderMain />} />
          <Route path="/konsultasi_page" element={<Konsultasi_page />} />
          <Route path="/Layanan_Kesehatan" element={<LayananKesehatan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Halaman_Konsultasi" element={<Konsultasi_page />} />
          <Route path="/Masuk" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/Halaman_Artikel" element={<ArtikelMain/>}></Route>
          <Route path="Detail_Artikel" element={<ArtikelSpecsMain/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
