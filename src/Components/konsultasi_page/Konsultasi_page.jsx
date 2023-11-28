import { Container, Col, Row, Button, Modal } from 'react-bootstrap';
import Footer from '../landing_page/footer/Footer';
import ccLogo1 from '../../assets/img/cc-logo1.png';
import fotodocter from '../../assets/img/doctors-day-cute-young-handsome-man-lab-coat-glasses-holding-book-removebg-preview 1.png';
import Chatpng from '../../assets/img/Chat.png';
import loginimgmodals from '../../assets/img/Group 111.png';
import './Konsultasi_page.css';
import { useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import NavbarNotAuth from '../landing_page/navbar/NavbarNotAuth';
import { dokterSpesialist } from '../../model/model_dokter';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';

function PemberitahuanLogin(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dialogClassName="box_modals">
      {/* <Modal.Header closeButton/> */}
      <div>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <div>
                <h1 className="close_modals" onClick={props.onHide}>
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
  const [modalShow, setModalShow] = useState(false);
  const [detailDokter, setDetailDokter] = useState(false);

  return (
    <>
      <Col md={12}>
        <div className="card-bungkus-image mt-4">
          {dokterSpesialist.map((dct) => (
            <div key={dct.id} className="card-image mb-4 ">
              <div className="card-image-bayanan">
                <img className="mt-4 foto-img" src={dct.image} alt="gambar" onClick={() => setModalShow(true)} />
              </div>
              <h3>
                {/* <a className="name-docter mt-3" href="#" onClick={() => hal_data_page('/halaman_konsultasi_data_page')}>
                      {dct.name}
                    </a> */}
                <a className="name-docter mt-3" onClick={() => setDetailDokter(true)}>
                  {dct.name}
                </a>
              </h3>
              <h3 className="name-spesialis ">{dct.specialist}</h3>
              <h5 className="review ">
                <i className="fa-solid fa-star"></i> 5.0 (300+ Review){' '}
              </h5>
            </div>
          ))}
        </div>
      </Col>

      <PemberitahuanLogin show={modalShow} onHide={() => setModalShow(false)} />
      <DetailDokter show={detailDokter} onHide={() => setDetailDokter(false)} />
    </>
  );
}

function DetailDokter(props) {
  const [nomorPonsel, setNomorPonsel] = useState(false);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dialogClassName="box_modals_detail">
      {/* <Modal.Header closeButton/> */}
      <div>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <Col>
                <img className="bg-detail-dokter" src={{}} alt="gambar" />
                <h1 className="name-dok mb-3">Dr. Shofiyyah Kamilah</h1>
                <i className="fa-solid fa-star fa-stars fa-2xl"></i>
                <i className="fa-solid fa-star fa-stars fa-2xl"></i>
                <i className="fa-solid fa-star fa-stars fa-2xl"></i>
                <i className="fa-solid fa-star fa-stars fa-2xl"></i>
                <i className="fa-solid fa-star fa-stars fa-2xl"></i>
              </Col>
              <Col className=" mt-2">
                <Row className="detail_title_desc">
                  <Col>
                    <h1>Nomor STR</h1>
                    <p>100100020020002</p>
                  </Col>
                  <Col>
                    <h1 className="close_modals_detail" onClick={props.onHide}>
                      x
                    </h1>
                  </Col>
                </Row>
                <Row className="detail_title_desc">
                  <h1>Lulusan</h1>
                  <p>Universitas andalas, 2016</p>
                </Row>
                <Row className="detail_title_desc">
                  <h1>Lokasi Praktik</h1>
                  <p>depok, jawa barat</p>
                </Row>
                <Row className="detail_title_desc">
                  <h1>lama bekerja</h1>
                  <p>7 tahun</p>
                </Row>
                <Row className="detail_title_desc">
                  <h1>Status</h1>
                  <div className="bg-status">
                    <h1>Online</h1>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5">
              <h1 className="harga_dokter">Rp. 20.000</h1>
              <Button className="button_modals" onClick={() => setNomorPonsel(faTruckMedical)}>
                Chat Sekarang
              </Button>
            </Row>
          </Container>
        </Modal.Body>
      </div>
      <InputNomorPonsel show={nomorPonsel} onHide={() => setNomorPonsel(false)} />
    </Modal>
  );
}

function InputNomorPonsel(props) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{12}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dialogClassName="box_modals_input_telepon">
      {/* <Modal.Header closeButton/> */}
      <div>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <div>
                <h1 className="close_modals_input_telepon" onClick={props.onHide}>
                  x
                </h1>
              </div>
            </Row>
            <Row>
              <Row className="modalstext">
                <h1 className='title_telepon mb-4'>Masukkan Nomor Ponsel</h1>
                <h6>
                  <span className="text-1">Masukkan Nomor Ponsel</span> Untuk Melanjutkan Proses Konsultasi Di <span className="text-2">Cervicare+</span>{' '}
                </h6>
                <Row>
                  <Col className="mt-3">
                    <label>
                      <PhoneInput inputClass="input_telepon" containerClass="container_telepon" dropdownClass="dropdown_country" country={'id'} value={phoneNumber} onChange={handleChange} inputProps={{ required: true }} />
                    </label>
                    {!valid && <p className="hint_telepon mt-3">Masukkan Nomor Telepon Anda</p>}
                  </Col>
                </Row>
                <h6 className="mt-3">
                  {' '}
                  Dengan ini, Saya Menyetujui <a href="">ketentuan Pengguna</a> Dan <a href="">Kebijakan Privasi</a> <span className="text-2">Cervicare+</span>{' '}
                </h6>
              </Row>
              <Button className="button_modals mt-3" onClick={{}}>
              <i className="fa-brands fa-whatsapp fa-2xl whatsapp-icon"></i> Kirim Kode Melalui WhatsApp
              </Button>
              <Button className="button_modals mt-3" onClick={{}}>
              <i className="fa-regular fa-envelope fa-xl envelope-icon"></i> Kirim Kode Melalui Pesan
              </Button>
            </Row>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
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
