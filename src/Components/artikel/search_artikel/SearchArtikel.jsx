import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useRef } from 'react';
import { topik } from '../../../model/model_topik.jsx';
import './SearchArtikel.css';

const SearchArtikel = () => {
  const linkRef = useRef(null);
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="bg_search">
      <Container className="mt-5">
        <Row>
          <Col className="searchbar">
            <Form.Control type="search" placeholder="Cari artikel berdasarkan judul, kategori, atau topik" className="me-2 rounded-pill search-1" aria-label="Search" />
            <Button className="rounded-pill search_button" variant="outline-danger">
              Cari
            </Button>
          </Col>
        </Row>
        <Row className="header_artikel mt-5 mb-5">
          <h1 className="judul-title">Temukan Lebih Banyak Artikel</h1>
          <p className="boxs-layanan">Mengenai pencegahan dini kanker serviks secara lengkap dan akurat</p>
          <Col className="card-ceritakan mb-5">
            <Button className="button_telusuri_artikel mt-3 mb-4" onClick={() => goto(linkRef.current)}>
              {' '}
              Telusuri Sekarang
            </Button>
          </Col>
        </Row>
        <Row ref={linkRef}>
          <div className=" my-3">
            <h4 className="">Topik Terkini</h4>
          </div>
          <Col>
            <div className="container_topik">
              <Row>
                {topik.map((t) => (
                  <Col md={3} key={t.id}>
                    <Button className="button_dokter">{t.name}</Button>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchArtikel;
