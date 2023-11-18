import Header from '../header_landingpage/Header';
import NavbarHome from '../navbar/Navbar';
import './NavbarHeader.css';

const NavbarHeader = () => {
  return (
    <div className="bg_navbar_header">
      <NavbarHome />
      <Header />
    </div>
  );
};

export default NavbarHeader;
