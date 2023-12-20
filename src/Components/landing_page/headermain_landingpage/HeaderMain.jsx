import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header_landingpage/Header';
import IsiPage from '../isi_landingpage/IsiPage';
import NavbarAuth from '../navbar/NavbarAuth';
import NavbarNotAuth from '../navbar/NavbarNotAuth';



const HeaderMain = () => {
  const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);
  const token = sessionStorage.getItem('token');
  useEffect(() => {
    if (token) {
      setnavbarUserIsLogged(true);
    }
    return () => {

    }
  }, [token])

  return (
    <div>
      {navbarUserIsLogged ? <NavbarAuth /> : <NavbarNotAuth />}
      <Header />
      <IsiPage />
      <Footer />
    </div>
  );
};

export default HeaderMain;
