import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/img/cc-logo2 1.png';
import './NavbarNotAuth.css';
import { useNavigate } from 'react-router-dom';
import profileImage from '../../../assets/img/Frame 95.png';

const NavbarAuth = () => {
  const linkHome = useNavigate();
  const linkKonsultasiPage = useNavigate();
  const linkArtikelPage = useNavigate();
  const linkLayananKesehatan = useNavigate();

  return (
    <div className="navbar_main">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logoaplikasi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center d-flex justify-content-center align-items-center nav_text">
              <Nav.Link onClick={() => linkHome('/')} className="text-secondary fw-bold nav_text_change">
                Home
              </Nav.Link>
              <Nav.Link onClick={() => linkKonsultasiPage('/Halaman_Konsultasi')} className="text-secondary fw-bold nav_text_change">
                Konsultasi
              </Nav.Link>
              <Nav.Link onClick={() => linkLayananKesehatan('/Layanan_Kesehatan')} className="text-secondary fw-bold nav_text_change">
                Layanan Kesehatan
              </Nav.Link>
              <Nav.Link onClick={() => linkArtikelPage('/Halaman_Artikel')} className="text-secondary fw-bold nav_text_change">
                Artikel
              </Nav.Link>
              <div className='d-flex justify-content-center align-items-center mt-2 mx-2'>
                <h1 className="profile_name mx-3">Ratna</h1>
                <img onClick={{}} src={profileImage} alt="Profile" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarAuth;
