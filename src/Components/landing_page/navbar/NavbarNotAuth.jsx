import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/img/cc-logo2 1.png';
import './NavbarNotAuth.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const NavbarNotAuth = () => {
  const linkHome = useNavigate();
  const linkLogin = useNavigate();
  const linkDaftar = useNavigate();
  const linkKonsultasiPage = useNavigate();
  const linkArtikelPage = useNavigate();
  const linkLayananKesehatan = useNavigate();

  return (
    <div className="navbar_main">
      <Navbar expand="lg" className="bg_color_navbar">
        <Container className="halo">
          <Navbar.Brand href="/">
            <img src={logo} alt="logoaplikasi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
              <div className="page_navbar">
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
              </div>
              <div className="login_button">
                <Nav.Link onClick={() => linkLogin('/Masuk')} className="text-black fw-bold nav_text_change">
                  Masuk
                </Nav.Link>
                <Nav.Link className="text-white fw-bold text-decoration-none">
                  <Button onClick={() => linkDaftar('/Daftar')} className="bg_login">
                    Daftar
                  </Button>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarNotAuth;
