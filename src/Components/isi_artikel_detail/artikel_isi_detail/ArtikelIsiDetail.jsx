import { Col, Row, Container, Button } from 'react-bootstrap';
import artikelImgTiga from '../../../assets/img/close-up-hand-with-food-container 1.png';
import './ArtikelIsiDetail.css';


const ArtikelIsiDetail = (props) => {
  const { content, title } = props.article;
  return (
    <div className="bg_isi_artikeldetail">
      <Container>
        <Row>
          <Col md={2}>
            <h1 className="title-left-isi">Home Article</h1>
          </Col>
          <Col md={8}>
            <h1 className="title-tengah-isi mb-5">{title}</h1>
            <div className="scroll-isi-artikeldetail">
              <p className="desc-tengah-isi">
                {content}
              </p>
            </div>
            <Row className="mt-5">
              <Col className="flex-info">
                <i className="fa-solid fa-circle-info fa-2xl icon-info"></i>
                <h1 className="desc-info">Share artikel ini untuk membantu masyarakat supaya terhindar dari penyakit kanker serviks dan berusaha untuk melakukan pencegahan sejak dini</h1>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="icon-media">
                <i className="fa-solid fa-share-nodes share-artikel fa-2xl"></i>
                <i className="fa-brands fa-whatsapp wa-artikel fa-2xl"></i>
                <i className="fa-brands fa-facebook fb-artikel fa-2xl"></i>
                <i className="fa-brands fa-twitter twt-artikel fa-2xl"></i>
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <div>
              <h1 className="title-right-isi mb-5">Publish teratas</h1>
              <div className="container_publish">
                <img src={artikelImgTiga} alt="gambar" className="image_publish" />
                <div>
                  <h1 className="title-publish">Tips Menjaga Pola Makan Walaupun Sibuk Bekerja</h1>
                </div>
                <Button className="button_publish">Selengkapnya</Button>
              </div>
            </div>
            <div>
              <div className="container_publish">
                <img src={artikelImgTiga} alt="gambar" className="image_publish" />
                <div>
                  <h1 className="title-publish">Tips Menjaga Pola Makan Walaupun Sibuk Bekerja</h1>
                </div>
                <Button className="button_publish">Selengkapnya</Button>
              </div>
            </div>
            <div>
              <div className="container_publish">
                <img src={artikelImgTiga} alt="gambar" className="image_publish" />
                <div>
                  <h1 className="title-publish">Tips Menjaga Pola Makan Walaupun Sibuk Bekerja</h1>
                </div>
                <Button className="button_publish">Selengkapnya</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArtikelIsiDetail;
