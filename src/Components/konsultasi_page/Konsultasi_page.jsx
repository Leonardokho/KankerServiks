import Footer from '../landing_page/footer/Footer';
import ccLogo1 from '../../assets/img/cc-logo1.png';
import fotodocter from '../../assets/img/doctors-day-cute-young-handsome-man-lab-coat-glasses-holding-book-removebg-preview 1.png';
import Chatpng from '../../assets/img/Chat.png';
import NavbarNotAuth from '../landing_page/navbar/NavbarNotAuth';
import NavbarAuth from '../landing_page/navbar/NavbarAuth';
import doktersatu from '../../assets/img/doktersatu.png';
import { Container, Col, Row, Button, Spinner } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import { dokterSpesialist } from '../../model/model_dokter';
import { faKitMedical, faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import './Konsultasi_page.css';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors, selectAllDoctors } from '../../features/doctorSlice';
import { openModal } from '../../features/modalSlice';
import ModalParent from '../modals/ModalParent';

const DoctorExcerpt = ({ doctor }) => {
  const dispatch = useDispatch();

  const token = sessionStorage.getItem('token');

  const handleModalShow = () => {
    if (token) {
      dispatch(openModal({ name: 'DetailDoctor', childrenProps: doctor }));
    } else {
      dispatch(openModal({ name: 'MustLogin' }));
    }
  }

  return (
    <>
      <div className="card-image mb-4 " onClick={handleModalShow}>
        <div className="card-image-bayanan">
          <img className="mt-4 foto-img" src={doktersatu} alt="gambar" />
        </div>
        <h3>
          <a className="name-docter mt-3">
            {doctor.name}
          </a>
        </h3>
        <h3 className="name-spesialis">Spesialis Onkologi</h3>
        <h5 className="review ">
          <i className="fa-solid fa-star"></i> 5.0 (300+ Review){' '}
        </h5>
      </div>

      <ModalParent />
    </>
  )
}

function ModalLogin() {
  const doctors = useSelector(selectAllDoctors);
  const doctorStatus = useSelector(state => state.doctors.status);
  const error = useSelector(state => state.doctors.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (doctorStatus === 'idle') {
      dispatch(fetchDoctors());
    }
    return () => {

    }
  }, [dispatch, doctorStatus, doctors])

  let content;

  if (doctorStatus === 'loading') {
    content = <Spinner animation="grow" variant='danger' />;
  } else if (doctorStatus === 'succeeded') {
    content = doctors.map((doctor, key) => <DoctorExcerpt doctor={doctor} key={key} />)
  } else if (doctorStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <>
      <Col md={12}>
        <div className="card-bungkus-image mt-4">
          {content}
        </div>
      </Col>
    </>
  );
}

const Konsultasi_page = () => {
  const linkRef = useRef(null);
   const token = sessionStorage.getItem("token");
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {token ? <NavbarAuth /> : <NavbarNotAuth />}
      <br />
      <br />
      <div className="bg-boxs">
        <Container>
          <Row className=" boxs mt-5">
            <Col md={8}>
              <h1 className="judul-title">
                Komunikasi Langsung dengan Dokter <img className="logo-cervicare" src={ccLogo1} alt="" />
              </h1>
              <p className="boxs-layanan mt-3">Layanan live chat yang siap membantu anda dalam mendapatkan informasi pencegahan dini Kanker Serviks dengan lebih mendalam bersama ahlinya.</p>
              <Button className="button_mulai mt-3" onClick={() => goto(linkRef.current)}>
                {" "}
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
            <Button className="button_mulai mt-3 mb-4"> Lebih Banyak</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Konsultasi_page;
