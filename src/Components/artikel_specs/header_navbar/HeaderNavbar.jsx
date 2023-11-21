import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/img/cc-logo2 1.png';
import { Button } from 'react-bootstrap';
import './HeaderNavbar.css';
import { useNavigate } from 'react-router-dom';

const HeaderNavbarArtikelSpecs = () => {
  const linkHome = useNavigate();
  const linkLogin = useNavigate();
  const linkDaftar = useNavigate();
  const linkKonsultasiPage = useNavigate();
  const linkArtikelPage = useNavigate();
  const linkLayananKesehatan = useNavigate();

  return (
    <div className='navbar_main'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logoaplikasi" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
              <Nav.Link href="" onClick={() => linkHome("/")} className='text-secondary fw-bold'>Home</Nav.Link>
              <Nav.Link href="" onClick={() => linkKonsultasiPage("/Halaman_Konsultasi")} className='text-secondary fw-bold'>Konsultasi</Nav.Link>
              <Nav.Link href="" onClick={() => linkLayananKesehatan("/Layanan_Kesehatan")} className='text-secondary fw-bold'>Layanan Kesehatan</Nav.Link>
              <Nav.Link href="" onClick={() => linkArtikelPage("/Halaman_Artikel")} className='text-secondary fw-bold'>Artikel</Nav.Link>
              <Nav.Link href="" onClick={() => linkLogin("/Masuk")} className='text-black fw-bold'>Masuk</Nav.Link>
              <Nav.Link href="#home" className='text-white fw-bold text-decoration-none'>
                <Button onClick={() => linkDaftar('/Daftar')} className='bg_login'>Daftar</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbarArtikelSpecs;
