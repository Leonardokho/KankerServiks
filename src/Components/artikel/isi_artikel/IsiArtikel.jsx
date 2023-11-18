import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './IsiArtikel.css';
import image4 from '../../../assets/img/image 4.jpg';
import image1 from '../../../assets/img/image1.png';
import image2 from '../../../assets/img/image 2.png';

const IsiArtikel = () => {
  const artikel = [
    {
      id: '1',
      //   img: '../../../assets/img/image1.png',
      desc: 'Apa itu kanker serviks?',
    },
    {
      id: '2',
      //   img: '../../../assets/img/image 3.png',
      desc: 'Apakah kanker serviks dapat dicegah?',
    },
    {
      id: '3',
      img: '../../../assets/img/sebaiknya-kapan-vaksin-hpv-dilakukan-untuk-mencegah-kanker-serviks 1.png',
      desc: 'Kapan Sebaiknya Melakukan vaksin HPV?',
    },
    {
      id: '4',
      img: '../../../assets/img/image 5.png',
      desc: 'Apakah kanker serviks dapat disembuhkan?',
    },
    {
      id: '5',
      img: '../../../assets/img/image 6.png',
      desc: 'Metode-metode pengobatan yang bisa digunakan dalam menangani kanker serviks',
    },
    {
      id: '6',
      img: '../../../assets/img/image 7.png',
      desc: 'Faktor apa saja yang menyebabkan kanker serviks?',
    },
    {
      id: '7',
      img: '../../../assets/img/image 8.png',
      desc: 'Hal-hal yang bisa kita lakukan agar terhindar dari kanker serviks',
    },
    {
      id: '8',
      img: '../../../assets/img/image 9.png',
      desc: 'Pada usia berapa perempuan rentan terkena kanker serviks?',
    },
    {
      id: '9',
      img: '../../../assets/img/image 10.png',
      desc: 'Syarat penerima vaksinasi HPV',
    },
  ];
  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-between my-3">
            <h4 className="">Topik Terkini</h4>
            <a href="" className="">
              Lihat Semua
            </a>
          </div>
          <Col>
            <div className="container_topik">
              <Row>
                <Col md={4}>
                  <div onClick={{}} className="bg_topik">
                    <h5>Macam Macam Kanker</h5>
                  </div>
                </Col>
                <Col md={4}>
                  <div onClick={{}} className="bg_topik">
                    <h5>Tes Skrining</h5>
                  </div>
                </Col>
                <Col md={4}>
                  <div onClick={{}} className="bg_topik">
                    <h5>Dampak Kanker</h5>
                  </div>
                </Col>
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
            <div></div>
          </Col>
        </Row>

        <Row>
          <div className="d-flex justify-content-between my-5">
            <h4 className="">Artikel Terbaru</h4>
          </div>
        </Row>
        <Row>
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
        <Row>
          <div onClick={{}} className="bg_topik">
            <h5>Macam Macam Kanker</h5>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default IsiArtikel;
