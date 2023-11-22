import Footer from '../footer/Footer';
import Header from '../header_landingpage/Header';
import IsiPage from '../isi_landingpage/IsiPage';
import NavbarAuth from '../navbar/NavbarAuth';

const HeaderMain = () => {
  return (
    <div>
      <NavbarAuth/>
      <Header />
      <IsiPage />
      <Footer />
    </div>
  );
};

export default HeaderMain;
