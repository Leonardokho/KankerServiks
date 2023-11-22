import Footer from '../footer/Footer';
import Header from '../header_landingpage/Header';
import IsiPage from '../isi_landingpage/IsiPage';
import NavbarNotAuth from '../navbar/NavbarNotAuth';

const HeaderMain = () => {
  return (
    <div>
      <NavbarNotAuth/>
      <Header />
      <IsiPage />
      <Footer />
    </div>
  );
};

export default HeaderMain;
