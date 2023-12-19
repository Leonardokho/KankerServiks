import Footer from '../../landing_page/footer/Footer';
import NavbarNotAuth from '../../landing_page/navbar/NavbarNotAuth';
import IsiArtikel from '../isi_artikel/IsiArtikel';
import SearchArtikel from '../search_artikel/SearchArtikel';
import NavbarAuth from "../../landing_page/navbar/NavbarAuth";
const ArtikelMain = () => {
   const token = sessionStorage.getItem("token");
  return (
    <div>
      {token ? <NavbarAuth /> : <NavbarNotAuth />}
      <SearchArtikel />
      <IsiArtikel />
      <Footer />
    </div>
  );
};

export default ArtikelMain;
