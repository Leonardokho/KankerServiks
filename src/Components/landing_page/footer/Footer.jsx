// import React from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap';
import logo from '../../src/assets/cc-logo-white 1.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="bg_footer">
      <Container>
        <Row>
          <Col md={4} className="my-5">
            <img src={logo} alt="logo carvicare" />
            <p className="desc_footer mt-5 desc_carvicare">
              Sebuah web platform penyedia jasa konsultasi online dengan dokter spesialis dan tempat layanan kesehatan terdekat yang menjalankan program vaksinasi HPV, kemoterapi dan skrining tes.
            </p>
          </Col>
          <Col md={2} className="my-5">
            <h1 className="company_title">Company</h1>
            <div className="company_link">
              <a href="" className="company_link mt-3">
                Location
              </a>
              <a href="" className="company_link mt-3">
                Career
              </a>
              <a href="" className="company_link mt-3">
                Product & Service
              </a>
              <a href="" className="company_link mt-3">
                Home
              </a>
            </div>
          </Col>
          <Col md={2} className="my-5">
            <h1 className="company_title">Help</h1>
            <div className="company_link">
              <a href="" className="company_link mt-3">
                Terms
              </a>
              <a href="" className="company_link mt-3">
                Privacy
              </a>
              <a href="" className="company_link mt-3">
                Contact
              </a>
              <a href="" className="company_link mt-3">
                Tutorial
              </a>
            </div>
          </Col>
          <Col md={4} className="my-5">
            <h1 className="company_title d-flex justify-content-end">Connect With Us</h1>
            <div className="connect_button">
              <Button className="instagram mt-3">
                <small>
                  <i className="fa-brands fa-instagram"></i>
                </small>{' '}
                Instagram
              </Button>
              <Button className="instagram mt-3">
                <small>
                  <i className="fa-brands fa-tiktok"></i>
                </small>{' '}
                Tiktok
              </Button>
              <Button className="instagram mt-3">
                <small>
                  <i className="fa-brands fa-twitter"></i>
                </small>{' '}
                Twitter
              </Button>
            </div>
            <h1 className="company_title d-flex justify-content-end mt-3">Apakah Kamu Dokter?</h1>
            <div className="connect_button">
              <Button className="instagram mt-3">Daftar Sekarang!</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
