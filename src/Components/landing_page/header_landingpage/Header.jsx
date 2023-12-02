// import React from 'react'
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import './Header.css';
import image from '../../../assets/img/doctor-with-his-arms-crossed-white-background-removebg-preview 1.png';
import { useRef } from 'react';

const Header = () => {
  const linkRef = useRef(null);
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="h_main_header">
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <div className=" head_left">
              <div className="w-200 mt-5 title">
                <h1 style={{ color: '#061D4A' }}>SOLUSI CEGAH DINI</h1>
                <h1 style={{ color: '#061D4A' }}>KANKER SERVIKS</h1>
              </div>
              <div className="w-200 mt-5 titledua">
                <h1 style={{ color: '#061D4A' }}>Cervicare adalah sebuah platform konsultasi online untuk</h1>
                <h1 style={{ color: '#061D4A' }}>membantu melakukan pencegahan dini terhadap kanker</h1>
                <h1 style={{ color: '#061D4A' }}>serviks.</h1>
              </div>
              <Col className=" mt-5">
                <Button onClick={() => goto(linkRef.current)} className="button_konsultasi_home mt-3 mb-4">
                  Mulai Konsultasi
                </Button>
              </Col>
            </div>
          </Col>
          <Col md={6}>
            <div className="head-right">
              <div className="imageContainer d-flex justify-content-end align-items-center">
                <img src={image} alt="doktermuda" className="head_rightImg" />
              </div>
            </div>
          </Col>
          <div style={{ width: '70rem' }} className="border-0 shadow_box_header" ref={linkRef}>
            <Card.Body>
              <Row className="px-5">
                <Col md={4}>
                  <h1 className="title_box">100+</h1>
                  {/* <h1 className="desc_box">Dokter Spesialis</h1> */}
                </Col>
                <Col md={4}>
                  <h1 className="title_box">40+</h1>
                  {/* <h1 className="desc_box">Mitra Rumah Sakit dan Puskesmas</h1> */}
                </Col>
                <Col md={4}>
                  <h1 className="title_box">2k+</h1>
                  {/* <h1 className="desc_box">Wanita terhindar dari kanker serviks</h1> */}
                </Col>
              </Row>
            </Card.Body>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
