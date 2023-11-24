import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './SearchArtikel.css';

const SearchArtikel = () => {
  return (
    <div className="bg_search">
      <Container className="mt-5">
        <Row>
          <Col className="searchbar">
            <Form.Control type="search" placeholder="Cari artikel berdasarkan judul, kategori, atau topik" className="me-2 rounded-pill search-1" aria-label="Search" />
            <Button className="rounded-pill search_button" variant="outline-danger">
              {/* <small>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </small> */}
              Cari
            </Button>
          </Col>
        </Row>
        <Row className="header_artikel mt-5">
          <h1 className="judul-title">Temukan Lebih Banyak Artikel</h1>
          <p className="boxs-layanan">Mengenai pencegahan dini kanker serviks secara lengkap dan akurat</p>
          <Col className="card-ceritakan mb-5">
            <Button className="button_dokter mt-3 mb-4"> Telusuri Sekarang</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchArtikel;
