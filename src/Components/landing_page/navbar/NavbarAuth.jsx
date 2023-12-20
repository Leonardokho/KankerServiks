import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/img/cc-logo2 1.png';
import profileImage from '../../../assets/img/Frame 95.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Row, Modal, Col, Button, NavDropdown, Dropdown, NavItem, NavLink } from 'react-bootstrap';
import './NavbarNotAuth.css';

function LogOutBox(props) {
  const linkLogin = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    linkLogin('/login');
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dialogClassName="box_logout">
      <div className="bg_box_logout">
        <Modal.Body>
          <Container>
            <Row>
              <h1 className="title_logout mt-5">yakin ingin keluar ?</h1>
            </Row>
            <Row className="mt-5 mb-5">
              <Col md={6} className="button_logout">
                <Button className="button_ya" onClick={() => logout()}>
                  Ya
                </Button>
              </Col>
              <Col md={6}>
                <Button className="button_tidak" onClick={props.onHide}>
                  Tidak
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
  );
}

const NavbarAuth = () => {
  const linkHome = useNavigate();
  const linkKonsultasiPage = useNavigate();
  const linkArtikelPage = useNavigate();
  const linkLayananKesehatan = useNavigate();
  const linkProfile = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const username = sessionStorage.getItem('username') ?? 'User';

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
              <div className='page_navbar'>
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
              <div className='login_button'>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>
                    <div className="d-flex justify-content-center align-items-center mt-1 mx-2">
                      <h1 className="profile_name mx-3">{username}</h1>
                      <img src={profileImage} alt="Profile" className="profilephoto" />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => linkProfile('/Live_chat')}>Live Chat</Dropdown.Item>
                    <Dropdown.Item onClick={() => linkProfile('/profile')} >Pengaturan</Dropdown.Item>
                    <Dropdown.Item onClick={() => setModalShow(true)}>Keluar</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LogOutBox show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default NavbarAuth;
