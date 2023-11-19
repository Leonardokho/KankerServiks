import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './IsiArtikel.css';
import image4 from '../../../assets/img/image 4.jpg';
import image1 from '../../../assets/img/image1.png';
import image3 from '../../../assets/img/image 3.png';
import image14 from '../../../assets/img/image 14.png';
import image11 from '../../../assets/img/image 11.png';
import image12 from '../../../assets/img/image 12.png';
import image13 from '../../../assets/img/image 13.png';
import image2 from '../../../assets/img/image 2.png';
import image5 from '../../../assets/img/image 5.png';
import image6 from '../../../assets/img/image 6.png';
import image7 from '../../../assets/img/image 7.png';
import image8 from '../../../assets/img/image 8.png';
import image9 from '../../../assets/img/image 9.png';
import image10 from '../../../assets/img/image 10.png';

const IsiArtikel = () => {
  const artikel = [
    {
      id: '1',
      img: image1,
      desc: 'Apa itu kanker serviks?',
    },
    {
      id: '2',
      img: image3,
      desc: 'Apakah kanker serviks dapat dicegah?',
    },
    {
      id: '3',
      img: image14,
      desc: 'Kapan Sebaiknya Melakukan vaksin HPV?',
    },
    {
      id: '4',
      img: image5,
      desc: 'Apakah kanker serviks dapat disembuhkan?',
    },
    {
      id: '5',
      img: image6,
      desc: 'Metode-metode pengobatan yang bisa digunakan dalam menangani kanker serviks',
    },
    {
      id: '6',
      img: image7,
      desc: 'Faktor apa saja yang menyebabkan kanker serviks?',
    },
    {
      id: '7',
      img: image8,
      desc: 'Hal-hal yang bisa kita lakukan agar terhindar dari kanker serviks',
    },
    {
      id: '8',
      img: image9,
      desc: 'Pada usia berapa perempuan rentan terkena kanker serviks?',
    },
    {
      id: '9',
      img: image10,
      desc: 'Syarat penerima vaksinasi HPV',
    },
  ];

  const topik = [
    {
      id: 1,
      name: 'Macam-Macam Kanker',
    },
    {
      id: 2,
      name: 'Tes Skrining',
    },
    {
      id: 3,
      name: 'Dampak Kanker',
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-between my-3">
            <h4 className="">Topik Terkini</h4>
            <a href="" className="topik_link">
              Lihat Semua
            </a>
          </div>
          <Col>
            <div className="container_topik">
              <Row>
                {topik.map((t) => (
                  <Col md={4} className="card-ceritakan" key={t.id}>
                    <Button className="button_dokter mt-3 mb-4">{t.name}</Button>
                  </Col>
                ))}
                {/* <Col md={4}>
                  <div onClick={{}} className="bg_topik">
                    <h5>Macam Macam Kanker</h5>
                  </div>
                </Col> */}
                {/* <Col md={4}>
                  <div onClick={{}} className="bg_topik">
                    <h5>Tes Skrining</h5>
                  </div>
                </Col> */}
                {/* <Col md={4}>
                  <div onClick={{}} className="bg_topik">
                    <h5>Dampak Kanker</h5>
                  </div>
                </Col> */}
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="d-flex justify-content-between my-5">
            <h4 className="">Artikel Terpopuler</h4>
          </div>
          <Col md={6}>
            <img src={image4} alt="" />
          </Col>
          <Col md={6}>
            <div className="container_artikel">
              <Row className="mb-4 shadow_artikel">
                <Col md={4}>
                  <img src={image2} alt="" />
                </Col>
                <Col md={8} className="desc_artikel">
                  <h6>Apa kanker serviks bisa menular?</h6>
                  <div className="bg_topik">
                    <h6>Dampak Kanker</h6>
                  </div>
                </Col>
              </Row>
              <Row className="mb-4 shadow_artikel">
                <Col md={4}>
                  <img src={image11} alt="" />
                </Col>
                <Col md={8}>
                  <h6>Berapa banyak perempuan di dunia yang mengidap penyakit kanker serviks?</h6>
                  <div className="bg_topik">
                    <h6>Statistik Kanker</h6>
                  </div>
                </Col>
              </Row>
              <Row className="mb-4 shadow_artikel">
                <Col md={4}>
                  <img src={image12} alt="" />
                </Col>
                <Col md={8}>
                  <h6>Kapan penyakit kanker serviks dapat diidentifikasi?</h6>
                  <div className="bg_topik">
                    <h6>Identifikasi Kanker</h6>
                  </div>
                </Col>
              </Row>
              <Row className="mb-4 shadow_artikel">
                <Col md={4}>
                  <img src={image13} alt="" />
                </Col>
                <Col md={8}>
                  <h6>Dampak kanker serviks pada perempuan</h6>
                  <div className="bg_topik">
                    <h6>Dampak Kanker</h6>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="d-flex justify-content-between my-5">
            <h4 className="">Artikel Terbaru</h4>
          </div>
        </Row>
        <Row className="artikel_terbaru">
          {artikel.map((art) => (
            <Col md={3} className="holder" key={art.id}>
              {/* <div className="image"> */}
              <Image src={art.img} className="image" alt="image" />
              {/* </div> */}
              {/* <div className="content"> */}
              <p className="content">{art.desc}</p>
              {/* </div> */}
            </Col>
          ))}
        </Row>
        <Col className="card-ceritakan mb-5">
          <Button className="button_dokter mt-3 mb-4"> Selanjutnya</Button>
        </Col>
      </Container>
    </div>
  );
};

export default IsiArtikel;
