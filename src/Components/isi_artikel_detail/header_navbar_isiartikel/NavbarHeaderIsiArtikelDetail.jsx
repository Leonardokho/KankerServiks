import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/img/cc-logo2 1.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './NavbarHeaderIsiArtikelDetail.css';
import image3 from '../../../assets/img/image 3.png';
import userPublish from '../../../assets/img/User.png';

const NavbarHeaderIsiArtikelDetail = () => {
  const linkHome = useNavigate();
  const linkLogin = useNavigate();
  const linkDaftar = useNavigate();
  const linkKonsultasiPage = useNavigate();
  const linkArtikelPage = useNavigate();
  const linkLayananKesehatan = useNavigate();

  const navbarArtDetail = document.querySelector('.bg_color_navbar_artikeldetail');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbarArtDetail.classList.add('bg_pinky');
    } else {
      navbarArtDetail.classList.remove('bg_pinky');
    }
  });

  return (
    <div>
      <div className="navbar_main_artikeldetail">
        <Navbar expand="lg" className="bg_color_navbar_artikeldetail">
          <Container className="halo" style={{ backgroundImage: { image3 } }}>
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
      <img src={image3} alt="gambarartikel" className="imageartikeldetail" />
      <Row className="row_title_artikel">
        <div>
          <h1 className="judul-title-artikeldetail">Apakah kanker serviks dapat dicegah?</h1>
        </div>
      </Row>
      <div className="bg-artikel-shadow flex-detail-publish">
        <Row className="width-artikeldetail">
          <Col className="detail_publisher">
            <img src={userPublish} alt="imagepublisher" className="image_publisher" />
            <Row>
              <h1 className="title1-left">by Almachzumi Rais</h1>
              <h1 className="title2-left">Friday, 10 November 2023</h1>
            </Row>
          </Col>
          <Col className="waktu_title">
            <h1 className="waktu-title">7 menit yang lalu</h1>
          </Col>
          <Col className="icon-socialmedia">
            <i className="fa-solid fa-share-nodes share-artikel fa-2xl"></i>
            <i className="fa-brands fa-whatsapp wa-artikel fa-2xl"></i>
            <i className="fa-brands fa-facebook fb-artikel fa-2xl"></i>
            <i className="fa-brands fa-twitter twt-artikel fa-2xl"></i>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NavbarHeaderIsiArtikelDetail;
