import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/img/cc-logo2 1.png';
import { Button } from 'react-bootstrap';
import './NavbarArtikel.css';
import { useNavigate } from 'react-router-dom';

const NavbarArtikel = () => {
  const linkLogin = useNavigate();
  const linkDaftar = useNavigate();
  return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 bg_navbar_artikel">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logoaplikasi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
                <Nav.Link href="#home" className="text-secondary fw-bold page">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="text-secondary fw-bold page">
                  Konsultasi
                </Nav.Link>
                <Nav.Link href="#" className="text-secondary fw-bold page">
                  Layanan Kesehatan
                </Nav.Link>
                <Nav.Link href="#" className="text-secondary fw-bold page">
                  Artikel
                </Nav.Link>
                <Nav.Link href="" onClick={() => linkLogin('/login')} className="text-black fw-bold">
                  Masuk
                </Nav.Link>
                <Nav.Link href="#home" className="text-white fw-bold text-decoration-none">
                  <Button onClick={() => linkDaftar('/daftar')} className="bg_login">
                    Daftar
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
};

export default NavbarArtikel;
