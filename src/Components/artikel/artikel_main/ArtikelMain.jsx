import Footer from '../../landing_page/footer/Footer';
import NavbarNotAuth from '../../landing_page/navbar/NavbarNotAuth';
import IsiArtikel from '../isi_artikel/IsiArtikel';
import SearchArtikel from '../search_artikel/SearchArtikel';

const ArtikelMain = () => {
   const token = sessionStorage.getItem("token");
  return (
    <div>
      <NavbarNotAuth />
      <SearchArtikel />
      <IsiArtikel />
      <Footer />
    </div>
  );
};

export default ArtikelMain;
