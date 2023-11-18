// import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './IsiPage.css';
import support from '../../../assets/img/support_7569835 1.png';
import healthcare from '../../../assets/img/healthcare-medical_9387204.png';
import chatrobot from '../../../assets/img/chatbot_2040946 1.png';
import doktersatu from '../../../assets/img/doktersatu.png';
import dokterdua from '../../../assets/img/woman-doctor-wearing-lab-coat-with-stethoscope-isolated-removebg-preview.png';
import doktertiga from '../../../assets/img/cheerful-male-doctor-white-gown-portrait-removebg-preview.png';
import feedbackimage from '../../../assets/img/reviewImgSatu.png';
import artikelImgSatu from '../../../assets/img/white-awareness-ribbon-two-hands-with-stethoscope-pink-background.png';
import artikelImgDua from '../../../assets/img/doctor-vaccinating-patient-clinic.png';
import artikelImgTiga from '../../../assets/img/close-up-hand-with-food-container 1.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IsiPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Container>
        <div style={{ width: '70rem' }} className="border-0 shadow_box">
          <Card.Body>
            <Row className="px-5">
              <Col md={4}>
                {/* <h1 className="title_box">100+</h1> */}
                <h1 className="desc_box">Dokter Spesialis</h1>
              </Col>
              <Col md={4}>
                {/* <h1 className="title_box">40+</h1> */}
                <h1 className="desc_box">Mitra Rumah Sakit dan Puskesmas</h1>
              </Col>
              <Col md={4}>
                {/* <h1 className="title_box">2k+</h1> */}
                <h1 className="desc_box">Wanita terhindar dari kanker serviks</h1>
              </Col>
            </Row>
          </Card.Body>
        </div>

        <Row>
          <div className="title_services mt-5">
            <h1>SERVICES</h1>
          </div>
          <div className="desc_services mt-3 mb-5">
            <h1>Layanan Yang Kami Tawarkan</h1>
          </div>
          <Col md={4}>
            <div className="boxContainer d-flex justify-content-center align-items-center">
              <div className="supportImg">
                <img src={healthcare} alt="support" className="" />
              </div>
            </div>
            <div className="box_title mt-3">
              <h1>Layanan Kesehatan</h1>
            </div>
            <div className="box_desc">
              <h1>Ada dua jenis layanan yang kami berikan, yaitu vaksinasi HPV dan skrining rutin.</h1>
            </div>
          </Col>
          <Col md={4}>
            <div className="boxContainer d-flex justify-content-center align-items-center">
              <div className="supportImg mt-2">
                <img src={support} alt="support" className="" />
              </div>
            </div>
            <div className="box_title mt-3">
              <h1>Konsultasi Online</h1>
            </div>
            <div className="box_desc">
              <h1>Konsultasi online yang dilakukan dengan para dokter spesialis onkologi.</h1>
            </div>
          </Col>
          <Col md={4}>
            <div className="boxContainer d-flex justify-content-center align-items-center">
              <div className="supportImg">
                <img src={chatrobot} alt="support" className="" />
              </div>
            </div>
            <div className="box_title mt-3">
              <h1>Tanya Kami</h1>
            </div>
            <div className="box_desc">
              <h1>Tanya kami merpakan sebuah fitur chatbot yang dapat digunakan oleh user secara gratis.</h1>
            </div>
          </Col>
        </Row>

        <div className="title_services mt-5">
          <h1>DOKTER KAMI</h1>
        </div>
        <div className="desc_services mt-3 mb-5">
          <h1>Dokter Spesialis Kami</h1>
        </div>

        <Row>
          <Col md={4}>
            <div style={{ width: '25rem' }} className="shadow_card rounded-3">
              <img src={doktersatu} className="dokterImg image_dokter" />
              <Card.Body>
                <h3 style={{ fontSize: '20px', textAlign: 'center', fontWeight: '600' }} className="namaDokter">
                  Dr. Shofiyyah Kamilah
                </h3>
                <Card.Text style={{ textAlign: 'center' }}>Spesialis Onkologi</Card.Text>
                <Card.Text style={{ fontSize: '15px', textAlign: 'center' }} className="d-flex justify-content-center align-items-center">
                  <small>
                    <i className="fa-solid fa-star starr"></i>
                  </small>{' '}
                  5.0 (300+review)
                </Card.Text>
              </Card.Body>
            </div>
          </Col>

          <Col md={4}>
            <div style={{ width: '25rem' }} className="shadow_card rounded-3">
              <img src={dokterdua} className="dokterImg image_dokter" />
              <Card.Body>
                <h3 style={{ fontSize: '20px', textAlign: 'center', fontWeight: '600' }}>Dr. Shofiyyah Kamilah</h3>
                <Card.Text style={{ textAlign: 'center' }}>Spesialis Onkologi</Card.Text>
                <Card.Text style={{ fontSize: '15px', textAlign: 'center' }} className="d-flex justify-content-center align-items-center">
                  <small>
                    <i className="fa-solid fa-star starr"></i>
                  </small>{' '}
                  5.0 (300+review)
                </Card.Text>
              </Card.Body>
            </div>
          </Col>

          <Col md={4}>
            <div style={{ width: '25rem' }} className="shadow_card rounded-3">
              <img src={doktertiga} className="dokterImg image_dokter" />
              <Card.Body>
                <h3 style={{ fontSize: '20px', textAlign: 'center', fontWeight: '600' }}>Dr. Shofiyyah Kamilah</h3>
                <Card.Text style={{ textAlign: 'center' }}>Spesialis Onkologi</Card.Text>
                <Card.Text style={{ fontSize: '15px', textAlign: 'center' }} className="d-flex justify-content-center align-items-center">
                  <small>
                    <i className="fa-solid fa-star starr"></i>
                  </small>{' '}
                  5.0 (300+review)
                </Card.Text>
              </Card.Body>
            </div>
          </Col>
        </Row>

        <Col className="card-ceritakan mt-5">
          <Button className="button_dokter mt-3 mb-4"> Lihat Semuanya</Button>
        </Col>

        <div className="title_services mt-5">
          <h1>FEEDBACK</h1>
        </div>
        <div className="desc_services mt-3 mb-5">
          <h1>Apa Kata Mereka Tentang Kita</h1>
        </div>

        <Row>
          <Col md={6}>
            <Row>
              <div className="square">
                <img src={feedbackimage} alt="" className="" />
              </div>
            </Row>
          </Col>

          <Col md={6} className="my-5">
            <Slider {...settings}>
              {data.map((d) => (
                <div key={d} style={{ width: '35rem', height: '25rem', background: 'white' }} className="rounded-5 border-1">
                  <div className="reviewCard">
                    <Row>
                      <div className="d-flex align-items-center">
                        <img src={d.img} className="reviewImg" />
                        <Col className="mx-5">
                          <h2 style={{ fontSize: '20px', textAlign: 'start', fontWeight: '600' }}>{d.name}</h2>
                          <Card.Text style={{ textAlign: 'start' }}>{d.job}</Card.Text>
                          <Card.Text style={{ fontSize: '15px', textAlign: 'start' }} className="d-flex justify-content-start align-items-start">
                            <small>
                              <i className="fa-solid fa-star starr"></i>
                            </small>
                            <small>
                              <i className="fa-solid fa-star starr"></i>
                            </small>
                            <small>
                              <i className="fa-solid fa-star starr"></i>
                            </small>
                            <small>
                              <i className="fa-solid fa-star starr"></i>
                            </small>
                            <small>
                              <i className="fa-solid fa-star starrBlack"></i>
                            </small>
                          </Card.Text>
                        </Col>
                      </div>
                      <Card.Text style={{ fontSize: '15px', textAlign: 'start' }} className="my-4">
                        {d.review}
                      </Card.Text>
                    </Row>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>

        <div className="d-flex justify-content-between my-5">
          <h1 className="title_artikel">Baca 100+ Artikel Kesehatan</h1>
          <Button className="button_dokter">Lihat Semua</Button>
        </div>

        <Row className="my-5">
          <Col md={4}>
            <div style={{ width: '25rem', height: '23rem' }} className="shadow_card rounded-3">
              <img src={artikelImgSatu} alt="" className="image_dokter" />
              <Card.Body className="p-3">
                <h4>7 Tips Mencegah Kanker Serviks</h4>
                <Card.Link href="#" className="d-flex justify-content-end mt-5 linkArtikel">
                  Baca selengkapnya...
                </Card.Link>
              </Card.Body>
            </div>
          </Col>
          <Col md={4}>
            <div style={{ width: '25rem', height: '23rem' }} className="shadow_card rounded-3">
              <img src={artikelImgDua} alt="" className="image_dokter" />
              <Card.Body className="p-3">
                <h4>Vaksin HPV Bisa Bantu Cegah Kanker Serviks?</h4>
                <Card.Link href="#" className="d-flex justify-content-end mt-4 linkArtikel">
                  Baca selengkapnya...
                </Card.Link>
              </Card.Body>
            </div>
          </Col>
          <Col md={4}>
            <div style={{ width: '25rem', height: '23rem' }} className="shadow_card rounded-3">
              <img src={artikelImgTiga} alt="" className="image_dokter" />
              <Card.Body className="p-3">
                <h4>Tips Menjaga Pola Makan Walaupun Sibuk Bekerja</h4>
                <Card.Link href="#" className="d-flex justify-content-end mt-4 linkArtikel">
                  Baca selengkapnya...
                </Card.Link>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const data = [
  {
    name: 'Nadia Syakira',
    job: 'mahasiswa',
    img: '../../../assets/img/reviewImg.png',
    review:
      '“Cervicare sangat membantu saya untuk mencegah salah satu penyakit yang ditakutkan oleh semua wanita, yaitu kanker serviks. Dokter-dokter spesialisnya juga sangat ramah dan sangat membantu, terimakasih Cervicare karena telah hadir dan membantu banyak wanita untuk terhindar dari penyakit kanker serviks.”',
  },
  {
    name: 'Susi Susanti',
    job: 'ibu rumah tangga',
    img: '../../../assets/img/ibu-rumah-tangga.jpg',
    review: '"Sangat membantu saya dalam menangani masalah kanker serviks"',
  },
];

export default IsiPage;
