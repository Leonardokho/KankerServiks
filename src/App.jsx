import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login_daftar/Login.jsx";
import Daftar from "./Components/Login_daftar/Daftar.jsx";
import Konsultasi_page from "./Components/konsultasi_page/Konsultasi_page.jsx";
import HeaderMain from "./Components/landing_page/headermain_landingpage/HeaderMain.jsx";
import ArtikelMain from "./Components/artikel/artikel_main/ArtikelMain.jsx";

import Konsultasi_data_page from "./Components/user_login/konsultasi_data_page/Konsultasi_data_page.jsx";

import LayananKesehatan from "./Components/layanan_kesehatan/Index.jsx";
import LayananDetailMain from "./Components/layanan_kesehatan_detail/layanan_detail_main/LayananDetailMain.jsx";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HeaderMain />} />
          <Route path="/konsultasi_page" element={<Konsultasi_page />} />
          <Route path="/Layanan_Kesehatan" element={<LayananKesehatan />} />
          <Route path="/Layanan_Kesehatan_Detail" element={<LayananDetailMain/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/Halaman_Konsultasi" element={<Konsultasi_page />} />
          <Route path="/Halaman_Konsultasi_data_page" element={<Konsultasi_data_page />} />
          <Route path="/Masuk" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/Halaman_Artikel" element={<ArtikelMain />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
