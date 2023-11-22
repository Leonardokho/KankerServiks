import Footer from "../../landing_page/footer/Footer"
// import NavbarHome from "../../landing_page/navbar/Navbar"
import IsiArtikel from "../isi_artikel/IsiArtikel"
import NavbarHome from "../../landing_page/navbar/Navbar"
import SearchArtikel from "../search_artikel/SearchArtikel"

const ArtikelMain = () => {
  return (
    <div>
      <NavbarHome />
      {/* <NavbarHome/> */}
      <SearchArtikel />
      <IsiArtikel />
      <Footer />
    </div>
  );
}

export default ArtikelMain