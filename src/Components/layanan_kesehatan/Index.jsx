// import React from 'react';
import '../landing_page/header_landingpage/Header.css';
import { Container, Row, Col, Button, Card, Stack } from 'react-bootstrap';
import femaleDoctorImage from '../../assets/img/female-doctor.png';
import NavbarHome from '../landing_page/navbar/Navbar';
import Footer from '../landing_page/footer/Footer';
import PapSmearIcon from '../../assets/img/pap-smear-icon.svg';
import IvaTestIcon from '../../assets/img/iva-test-icon.svg';
import HpvIcon from '../../assets/img/hpv-icon.svg';
import KlinikAnNisa from '../../assets/img/faskes/klinik-penyakit-kelamin.svg';
import MedikaKedua from '../../assets/img/faskes/rs-medika-kedua.svg';
import PuskesmasSambas from '../../assets/img/faskes/puskesmas-desa-sambas.svg';

const Index = () => {
  return (
    <>
      <NavbarHome />

      <div className="h_main_header">
        <Container>
          <Row className="mt-5 py-5">
            <Col md={6}>
              <div className=" head_left">
                <div className="w-200 mt-5 title">
                  <h1 style={{ color: '#061D4A' }} className="fw-bold">
                    Langkah Awal Melawan Kanker Serviks
                  </h1>
                  <h5 style={{ color: '#061D4A' }}>Skrining dan Vaksinasi HPV Anda di Sini!</h5>
                </div>
                <Col className="mt-2">
                  <Button className="button_dokter mt-3 mb-4">Mulai Sekarang</Button>
                </Col>
              </div>
            </Col>
            <Col md={6}>
              <div className="head-right">
                <div className="imageContainer d-flex justify-content-end align-items-center">
                  <img src={femaleDoctorImage} alt="doctor" className="head_rightImg" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row id="services" className="px-5 py-5">
          <div className="desc_services my-3">
            <h1>Layanan Kesehatan Kami</h1>
            <h5 className="text-center fw-normal">Pilih layanan kesehatan sesuai kebutuhan anda!</h5>
          </div>
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="pt-4 pb-2 px-3">
              <Card.Img variant="left" src={PapSmearIcon} style={{ width: '72px' }} />
              <Card.Body>
                <p className="fw-bolder fs-4">Pap Smear</p>
                <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>metode pemeriksaan yang dilakukan untuk mendeteksi kanker leher rahim (serviks) pada wanita</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem', backgroundColor: '#F31559' }} className="pt-4 pb-2 px-3 text-white">
              <Card.Img variant="left" src={IvaTestIcon} style={{ width: '72px' }} />
              <Card.Body>
                <p className="fw-bolder fs-4">IVA test</p>
                <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>Pemeriksaan visual leher rahim dengan asam asetat encer tanpa alat pembesar.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="pt-4 pb-2 px-3">
              <Card.Img variant="left" src={HpvIcon} style={{ width: '72px' }} />
              <Card.Body>
                <p className="fw-bolder fs-4">Vaksinasi HPV</p>
                <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>program imunisasi untuk melindungi tubuh dari infeksi human papillomavirus (HPV)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <h1>Pilih tempat Faskes terdekat</h1>
        <Stack direction="horizontal" gap={2}>
          <div>
            <h6 className="text-muted fw-normal">Berbagai pilihan tempat Faskes</h6>
          </div>
          <div className="ms-auto">
            <a href="" className="text-decoration-none">
              Lihat Semuanya
            </a>
          </div>
        </Stack>
        <Stack direction="horizontal" gap={3} className="py-2">
          <div className="p-2">
            <Card style={{ width: '22rem' }} className="border-0 rounded shadow">
              <Card.Img variant="top" src={PuskesmasSambas} />
              <Card.Body>
                <h5>Puskesmas Desa Sambas</h5>
                <Card.Text className="text-muted">Puskesmas</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="p-2 mx-auto">
            <Card style={{ width: '22rem' }} className="border-0 rounded shadow">
              <Card.Img variant="top" src={MedikaKedua} />
              <Card.Body>
                <h5>RS. Medika Kedua</h5>
                <Card.Text className="text-muted">Rumah Sakit</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="p-2">
            <Card style={{ width: '22rem' }} className="border-0 rounded shadow">
              <Card.Img variant="top" src={KlinikAnNisa} />
              <Card.Body>
                <h5>Klinik Penyakit Kelamin An-Nisa</h5>
                <Card.Text className="text-muted">Klinik</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Stack>
      </Container>

      <Footer />
    </>
  );
};

export default Index;
