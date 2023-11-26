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
import reviewSatu from '../../../assets/img/reviewImg.png';
import reviewDua from '../../../assets/img/reviewdua.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IsiPage = () => {
  const data = [
    {
      id: 1,
      name: 'Nadia Syakira',
      job: 'mahasiswa',
      img: reviewSatu,
      review:
        '“Cervicare sangat membantu saya untuk mencegah salah satu penyakit yang ditakutkan oleh semua wanita, yaitu kanker serviks. Dokter-dokter spesialisnya juga sangat ramah dan sangat membantu, terimakasih Cervicare karena telah hadir dan membantu banyak wanita untuk terhindar dari penyakit kanker serviks.”',
    },
    {
      id: 2,
      name: 'Susi Susanti',
      job: 'ibu rumah tangga',
      img: reviewDua,
      review: '"Sangat membantu saya dalam menangani masalah kanker serviks"',
    },
  ];

  const dokterSpesialis = [
    {
      id: 1,
      name: 'Dr. Shofiyyah Kamilah',
      image: doktersatu,
      specialist: 'Spesialis Onkologi',
    },
    {
      id: 2,
      name: 'Dr. Anastasya',
      image: dokterdua,
      specialist: 'Spesialis Onkologi',
    },
    {
      id: 3,
      name: 'Dr. Smith Rowe',
      image: doktertiga,
      specialist: 'Spesialis Onkologi',
    },
  ];

  const settings = {
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
              <h1>Skrining Test </h1>
            </div>
            <div className="box_desc">
              <h1>Ada dua jenis layanan skrining test yang kami sediakan, yaitu pap smear dan IVA test</h1>
            </div>
          </Col>
          <Col md={4}>
            <div className="boxContainer d-flex justify-content-center align-items-center">
              <div className="supportImg">
                <img src={support} alt="support" className="image_support" />
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
              <h1>Vaksinasi HPV</h1>
            </div>
            <div className="box_desc">
              <h1>program imunisasi untuk melindungi tubuh dari infeksi human papillomavirus (HPV)</h1>
            </div>
          </Col>
        </Row>

        <div className="title_services mt-5">
          <h1>DOKTER KAMI</h1>
        </div>
        <div className="desc_services mt-3 mb-5">
          <h1>Dokter Spesialis Kami</h1>
        </div>

        <Col md={12}>
          <div className="card-bungkus-dokter mt-4">
            {dokterSpesialis.map((dct) => (
              <div key={dct.id} className="card-box-dokter ">
                <div className="card-image-dokter">
                  <img className="mt-4 foto-dokter" src={dct.image} alt="gambar" />
                </div>
                <h3>
                  <a className="name-dokter">{dct.name}</a>
                </h3>
                <h3 className="name-spesialis ">{dct.specialist}</h3>
                <h5 className="review ">
                  <i className="fa-solid fa-star"></i> 5.0 (300+ Review){' '}
                </h5>
              </div>
            ))}
          </div>
        </Col>

        <Col className="card-ceritakan mt-5">
          <Button className="button_dokter mt-3 mb-4"> Lihat Semuanya</Button>
        </Col>

        <div className="title_services mt-5">
          <h1>FEEDBACK</h1>
        </div>
        <div className="desc_services mt-3 mb-5">
          <h1>Apa Kata Mereka Tentang Kita</h1>
        </div>
      </Container>
      <Row className="row_review">
        <Col md={6} className="image_review_left">
          <div className="square ">
            <img src={feedbackimage} alt="image" className="image_review" />
          </div>
        </Col>
        <Col md={5} className="my-5 mx-5">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.id} className="p-4">
                <div className="carousel_card">
                  <div className="reviewCard">
                    <Row>
                      <div className="d-flex align-items-center">
                        <img src={d.img} className="reviewImg" />
                        <Col className="mx-5">
                          <h2 style={{ fontSize: '20px', textAlign: 'start', fontWeight: '600' }}>{d.name}</h2>
                          <Card.Text style={{ textAlign: 'start', fontFamily: 'Montserrat' }}>{d.job}</Card.Text>
                          <Card.Text style={{ fontSize: '15px', textAlign: 'start', fontFamily: 'Montserrat' }} className="d-flex justify-content-start align-items-start">
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
                      <Card.Text style={{ fontSize: '18px', textAlign: 'start', fontFamily: 'Montserrat' }} className="my-4">
                        {d.review}
                      </Card.Text>
                    </Row>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
      <Container>
        <div className="d-flex justify-content-between my-5">
          <h1 className="title_artikel">Baca 100+ Artikel Kesehatan</h1>
          <a className="linkArtikel">Lihat Semua</a>
        </div>

        <Row className="my-5">
          <Col md={4}>
            <div style={{ width: '25rem', height: '23rem' }} className="shadow_card rounded-3">
              <img src={artikelImgSatu} alt="" className="image_dokter" />
              <Card.Body className="p-3">
                <h5 className="title_art">7 Tips Mencegah Kanker Serviks</h5>
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
                <h5 className="title_art">Vaksin HPV Bisa Bantu Cegah Kanker Serviks?</h5>
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
                <h5 className="title_art">Tips Menjaga Pola Makan Walaupun Sibuk Bekerja</h5>
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

export default IsiPage;
