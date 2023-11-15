// import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './IsiPage.css';
import support from '../../src/assets/support_7569835 1.png';
import healthcare from '../../src/assets/healthcare-medical_9387204.png';
import chatrobot from '../../src/assets/chatbot_2040946 1.png';
import doktersatu from '../../src/assets/asian-female-doctor-physician-medical-uniform-with-stethoscope-cross-arms-chest-smiling-looking-like-professional-white-background-removebg-preview.png';
import dokterdua from '../../src/assets/woman-doctor-wearing-lab-coat-with-stethoscope-isolated-removebg-preview.png';
import doktertiga from '../../src/assets/cheerful-male-doctor-white-gown-portrait-removebg-preview.png';
import feedbackimage from '../../src/assets/people-emotions-lifestyle-leisure-beauty-concept-upbeat-happy-cheerful-asian-girl-dancing-having-fun-partying-moving-rhythm-music-smiling-yellow-background-removebg-preview 1.png';
import artikelImgSatu from '../../src/assets/white-awareness-ribbon-two-hands-with-stethoscope-pink-background.png';
import artikelImgDua from '../../src/assets/doctor-vaccinating-patient-clinic.png';
import artikelImgTiga from '../../src/assets/close-up-hand-with-food-container 1.png';
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
    <div className="mt-5">
      <Container>
        <Card style={{ width: '70rem' }} className="border-0 rounded-5 shadow_box">
          <Card.Body>
            <Row className="px-5">
              <Col md={4}>
                <h1 className="title_box">100+</h1>
                <h1 className="desc_box">Dokter Spesialis</h1>
              </Col>
              <Col md={4}>
                <h1 className="title_box">40+</h1>
                <h1 className="desc_box">Mitra Rumah Sakit dan Puskesmas</h1>
              </Col>
              <Col md={4}>
                <h1 className="title_box">2k+</h1>
                <h1 className="desc_box">Wanita terhindar dari kanker serviks</h1>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Row>
          <div className="title_services">
            <h1>SERVICES</h1>
          </div>
          <div className="desc_services mt-3 mb-5">
            <h1>Layanan Yang Kami Tawarkan</h1>
          </div>
          <Col md={4}>
            <div className="box">
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
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
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
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
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
            <Card style={{ width: '25rem' }} className="shadow_card rounded-3">
              <img src={doktersatu} className="dokterImg" />
              <Card.Body>
                <Card.Title style={{ fontSize: '20px', textAlign: 'center', fontWeight: '600' }} className="namaDokter">
                  Dr. Shofiyyah Kamilah
                </Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>Spesialis Onkologi</Card.Text>
                <Card.Text style={{ fontSize: '15px', textAlign: 'center' }} className="d-flex justify-content-center align-items-center">
                  <small>
                    <i className="fa-solid fa-star starr"></i>
                  </small>{' '}
                  5.0 (300+review)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: '25rem' }} className="shadow_card rounded-3">
              <img src={dokterdua} className="dokterImg" />
              <Card.Body>
                <Card.Title style={{ fontSize: '20px', textAlign: 'center', fontWeight: '600' }}>Dr. Shofiyyah Kamilah</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>Spesialis Onkologi</Card.Text>
                <Card.Text style={{ fontSize: '15px', textAlign: 'center' }} className="d-flex justify-content-center align-items-center">
                  <small>
                    <i className="fa-solid fa-star starr"></i>
                  </small>{' '}
                  5.0 (300+review)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: '25rem' }} className="shadow_card rounded-3">
              <img src={doktertiga} className="dokterImg" />
              <Card.Body>
                <Card.Title style={{ fontSize: '20px', textAlign: 'center', fontWeight: '600' }}>Dr. Shofiyyah Kamilah</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>Spesialis Onkologi</Card.Text>
                <Card.Text style={{ fontSize: '15px', textAlign: 'center' }} className="d-flex justify-content-center align-items-center">
                  <small>
                    <i className="fa-solid fa-star starr"></i>
                  </small>{' '}
                  5.0 (300+review)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mt-4 justify-content-center align-items-center">
          <Button className="button_dokter">Lihat Semuanya</Button>
        </div>

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
                <Card key={d} style={{ width: '35rem', height: '25rem' }} className="rounded-5 border-1">
                  <div className="reviewCard">
                    <Row>
                      <div className="d-flex align-items-center">
                        <img src={d.img} className="reviewImg" />
                        <Col className="mx-5">
                          <Card.Title style={{ fontSize: '20px', textAlign: 'start', fontWeight: '600' }}>{d.name}</Card.Title>
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
                </Card>)
              )}
            </Slider>
          </Col>
        </Row>

        <div className="d-flex justify-content-between my-5">
          <h1 className="title_artikel">Baca 100+ Artikel Kesehatan</h1>
          <Button className="button_dokter">Lihat Semua</Button>
        </div>

        <Row className="my-5">
          <Col md={4}>
            <Card style={{ width: '25rem', height: '23rem' }} className="shadow_card rounded-3">
              <img src={artikelImgSatu} alt="" />
              <Card.Body>
                <Card.Title>7 Tips Mencegah Kanker Serviks</Card.Title>
                <Card.Link href="#" className="d-flex justify-content-end mt-5 linkArtikel">
                  Baca selengkapnya...
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '25rem', height: '23rem' }} className="shadow_card rounded-3">
              <img src={artikelImgDua} alt="" />
              <Card.Body>
                <Card.Title>Vaksin HPV Bisa Bantu Cegah Kanker Serviks?</Card.Title>
                <Card.Link href="#" className="d-flex justify-content-end mt-4 linkArtikel">
                  Baca selengkapnya...
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '25rem', height: '23rem' }} className="shadow_card rounded-3">
              <img src={artikelImgTiga} alt="" />
              <Card.Body>
                <Card.Title>Tips Menjaga Pola Makan Walaupun Sibuk Bekerja</Card.Title>
                <Card.Link href="#" className="d-flex justify-content-end mt-4 linkArtikel">
                  Baca selengkapnya...
                </Card.Link>
              </Card.Body>
            </Card>
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
    img: '../../src/assets/beautiful-young-woman-showing-okay-sign-smiling-pleased-recommending-smth-approve-like-product-standing-yellow-tshirt-white-background 1.png',
    review:
      '“Cervicare sangat membantu saya untuk mencegah salah satu penyakit yang ditakutkan oleh semua wanita, yaitu kanker serviks. Dokter-dokter spesialisnya juga sangat ramah dan sangat membantu, terimakasih Cervicare karena telah hadir dan membantu banyak wanita untuk terhindar dari penyakit kanker serviks.”',
  },
  {
    name: 'Susi Susanti',
    job: 'ibu rumah tangga',
    img: '../../src/assets/ibu-rumah-tangga.jpg',
    review: '"Sangat membantu saya dalam menangani masalah kanker serviks"',
  },
];

export default IsiPage;
