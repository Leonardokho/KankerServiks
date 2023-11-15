// import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import image from '../../src/assets/doctor-with-his-arms-crossed-white-background-removebg-preview 1.png'

const Header = () => {
  return (
    <div className="h_main_header">
      <Container>
        <Row>
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
              <div className="mt-5">
                <Button className="button_konsultasi">Mulai Konsultasi</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="head-right">
                <div className="imageContainer d-flex justify-content-end align-items-center">
                    <img src={image} alt="doktermuda" className='head_rightImg'/>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
