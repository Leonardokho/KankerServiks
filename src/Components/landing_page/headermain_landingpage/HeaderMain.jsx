import Footer from '../footer/Footer';
import Header from '../header_landingpage/Header';
import IsiPage from '../isi_landingpage/IsiPage';
import NavbarAuth from '../navbar/NavbarAuth';
import NavbarNotAuth from '../navbar/NavbarNotAuth';



const HeaderMain = () => {
  const token = sessionStorage.getItem('token');
  return (
    <div>
      {token ? <NavbarAuth/>:<NavbarNotAuth  />}
      <Header />
      <IsiPage />
      <Footer />
    </div>
  );
};

export default HeaderMain;
