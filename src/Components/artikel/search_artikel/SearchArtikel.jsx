import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './SearchArtikel.css';

const SearchArtikel = () => {
  return (
    <div className="bg_search">
      <Container className="mt-5">
        <Row>
          <Col className="searchbar">
              <Form.Control type="search" placeholder="Cari artikel berdasarkan judul, kategori, atau topik" className="me-2 rounded-pill" aria-label="Search" />
              <Button className="rounded-pill search_button" variant="outline-primary">
                {/* <small>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </small> */}
                Cari
              </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchArtikel;
