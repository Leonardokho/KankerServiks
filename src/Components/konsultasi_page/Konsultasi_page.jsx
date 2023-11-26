import { Container, Col, Row, Button, Modal } from 'react-bootstrap';
import Footer from '../landing_page/footer/Footer';
import ccLogo1 from '../../assets/img/cc-logo1.png';
import fotodocter from '../../assets/img/doctors-day-cute-young-handsome-man-lab-coat-glasses-holding-book-removebg-preview 1.png';
import Chatpng from '../../assets/img/Chat.png';
import doktersatu from '../../assets/img/doktersatu.png';
import dokterdua from '../../assets/img/woman-doctor-wearing-lab-coat-with-stethoscope-isolated-removebg-preview.png';
import doktertiga from '../../assets/img/cheerful-male-doctor-white-gown-portrait-removebg-preview.png';
import dokterempat from '../../assets/img/image 17.png';
import dokterlima from '../../assets/img/image 16.png';
import dokterenam from '../../assets/img/image 15.png';
import loginimgmodals from '../../assets/img/Group 111.png';
import './Konsultasi_page.css';
import { useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import NavbarNotAuth from '../landing_page/navbar/NavbarNotAuth';

function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dialogClassName="box_modals">
      {/* <Modal.Header closeButton/> */}
      <div>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <div>
                <h1 className="close-modals" onClick={props.onHide}>
                  x
                </h1>
              </div>
            </Row>
            <Row>
              <Col md={7} className="d-flex justify-content-center align-items-center">
                <Row className="modalstext">
                  <h1>Heyy,</h1>
                  <h6>untuk mengakses halaman ini kamu harus login terlebih dahulu ya...</h6>
                </Row>
              </Col>
              <Col md={5}>
                <img src={loginimgmodals} alt="" />
              </Col>
              <Button className="button_modals mt-5" onClick={{}}>
                Login
              </Button>
            </Row>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
  );
}

function ModalLogin() {
  const dokterSpesialis = [
    {
      id: 1,
      name: 'Dr. Shofiyyah Kamilah',
      image: doktersatu,
      specialist: 'Spesialis Onkologi',
    },
    {
      id: 2,
      name: "Dr. Anastasya",
      image: dokterdua,
      specialist: "Spesialis Onkologi",
    },
    {
      id: 3,
      name: "Dr. Smith Rowe",
      image: doktertiga,
      specialist: "Spesialis Onkologi",
    },
    {
      id: 4,
      name: "Dr. Diana Ayu Pratiwi",
      image: dokterempat,
      specialist: "Spesialis Onkologi",
    },
    {
      id: 5,
      name: "Dr. Anastasya",
      image: dokterlima,
      specialist: "Spesialis Onkologi",
    },
    {
      id: 6,
      name: "Dr. Raden Sanjaya",
      image: dokterenam,
      specialist: "Spesialis gi",
    },
    
  ];
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Col md={12}>
        <div className="card-bungkus-image mt-4">
          {dokterSpesialis.map((dct) => (
            <div key={dct.id} className="card-image mb-4 " onClick={() => setModalShow(true)}>
              <div className="card-image-bayanan">
                <img className="mt-4 foto-img" src={dct.image} alt="gambar" />
              </div>
              <h3>
                {/* <a className="name-docter mt-3" href="#" onClick={() => hal_data_page('/halaman_konsultasi_data_page')}>
                      {dct.name}
                    </a> */}
                <a className="name-docter mt-3">{dct.name}</a>
              </h3>
              <h3 className="name-spesialis ">{dct.specialist}</h3>
              <h5 className="review ">
                <i className="fa-solid fa-star"></i> 5.0 (300+ Review){' '}
              </h5>
            </div>
          ))}
        </div>
      </Col>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

const Konsultasi_page = () => {
  const linkRef = useRef(null);
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  // const hal_data_page = useNavigate();

  return (
    <div>
      <NavbarNotAuth />
      
      <div className="bg-boxs">
        <Container>
          <Row className=" boxs mt-5">
            <Col md={8}>
              <h1 className="mt-5 judul-title">
                Komunikasi Langsung dengan Dokter <img className="logo-cervicare" src={ccLogo1} alt="" />
              </h1>
              <p className="  boxs-layanan">Layanan live chat yang siap membantu anda dalam mendapatkan informasi pencegahan dini Kanker Serviks dengan lebih mendalam bersama ahlinya.</p>
              <Button className="button_mulai" onClick={() => goto(linkRef.current)}>
                {' '}
                Mulai Sekarang
              </Button>
            </Col>
          </Row>

          <Col>
            <img className="foto-docter" src={fotodocter} alt="gambar" />
          </Col>
        </Container>
      </div>
      <div className="bg-boxs-2 "></div>
      <Container>
        <Row className="mt-5 card-ceritakan">
          <Col md={6}>
            <h1 className="title-merah mt-4">Ruang Yang Aman & Nyaman Ceritakan Masalahmu</h1>
          </Col>
          <Col md={8}>
            <p className="title-deskripsi">Dengan Fitur Unggulan dari Website Cervicare+ Kami</p>
          </Col>
          <Col md={8}>
            <img src={Chatpng} alt="" />
            <Col md={6} className="mx-auto">
              <p className="text-title-chat-live">Live Chat Bersama Dokter Ahli Kanker Serviks</p>
            </Col>
          </Col>

          <Col md={7} className="mt-4">
            <h1 className="title-merah mt-5" ref={linkRef}>
              Berbagai Pilihan dokter spesialis
            </h1>
          </Col>
          <Col md={12}>
            <p className="title-deskripsi">Konsultasikan Masalah dengan Dokter Pilihanmu</p>
          </Col>

          <ModalLogin />

          <Col>
            <Button className="button-banyak mt-3 mb-4"> Lebih Banyak</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Konsultasi_page;
