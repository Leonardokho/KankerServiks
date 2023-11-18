import Footer from "../../landing_page/footer/Footer"
// import NavbarHome from "../../landing_page/navbar/Navbar"
import IsiArtikel from "../isi_artikel/IsiArtikel"
import NavbarArtikel from "../navbar_artikel/NavbarArtikel"
import SearchArtikel from "../search_artikel/SearchArtikel"

const ArtikelMain = () => {
  return (
    <div>
        <NavbarArtikel/>
        {/* <NavbarHome/> */}
        <SearchArtikel/>
        <IsiArtikel/>
        <Footer/>
    </div>
  )
}

export default ArtikelMain