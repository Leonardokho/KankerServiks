import { Tab, Container, Row, Col, Button, Form, Nav } from 'react-bootstrap';
import klinik1 from '../../../assets/img/place1.png';
import klinik2 from '../../../assets/img/place2.png';
import klinik3 from '../../../assets/img/place3.png';

import './LayananDetail.css';

const LayananDetail = () => {
  const klinik = [
    {
      id: 1,
      image: klinik1,
      name: 'RS Sentra Medika Cibinong',
      jenis: 'Rumah Sakit',
      lokasi: 'Bogor, Jawa Barat',
    },
    {
      id: 2,
      image: klinik2,
      name: 'Puskesmas Desa Sambas',
      jenis: 'Puskesmas',
      lokasi: 'Bogor, Jawa Barat',
    },
    {
      id: 3,
      image: klinik3,
      name: 'Klinik Penyakit Kelamin An-Nisa',
      jenis: 'Klinik',
      lokasi: 'Bogor, Jawa Barat',
    },
  ];
  return (
    <div className="layanan_detail_header">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="papsmear">
          <Row className="mt-5">
            <Row className="header_layanan mt-5 mb-5">
              <h1>Layanan Kesehatan</h1>
            </Row>
            <Nav variant="pills" className="nav_pill" fill>
              <Nav.Item className="nav_item">
                <Nav.Link eventKey="papsmear" className="nav_link">
                  Pap Smear
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav_item">
                <Nav.Link eventKey="testiva" className="nav_link">
                  Test IV A
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav_item">
                <Nav.Link eventKey="vaksinasihpv" className="nav_link">
                  Vaksinasi HPV
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="papsmear">
                <Row className="mt-5">
                  <Col md={4}>
                    <div className="lokasi_container">
                      <Row className="mb-3 text_lokasi">
                        <Col className="d-flex justify-content-center align-items-center lokasi_space">
                          <i className="fa-solid fa-location-dot location_dot mx-1"></i> Lokasi
                        </Col>
                        <Col className="mb-1">
                          <a href="" className="link_detail">
                            Detail lokasi
                          </a>
                        </Col>
                      </Row>
                      <Row>
                        <div className="container_lokasi"></div>
                      </Row>
                      <Row className="mt-4 mb-2">
                        <Form>
                          {['radio'].map((type) => (
                            <div key={`reverse-${type}`} className="mb-3 ">
                              <Form.Check label="Semua lokasi" name="group1" type={type} id={`${type}-1`} />
                              <Form.Check label="Terdekat" name="group1" type={type} id={`${type}-2`} />
                            </div>
                          ))}
                        </Form>
                      </Row>
                      <Row>
                        <div className="container_lokasi"></div>
                      </Row>
                      <Row className="mt-4 mb-2">
                        <Form>
                          {['radio'].map((type) => (
                            <div key={`reverse-${type}`} className="mb-3 ">
                              <Form.Check label="Jakarta" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Bogor" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Depok" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Tangerang" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Bekasi" name="group1" type={type} id={`${type}-2`} />
                            </div>
                          ))}
                        </Form>
                      </Row>
                    </div>
                  </Col>
                  <Col md={8}>
                    {klinik.map((k) => (
                      <div key={k.id} className="container_klinik">
                        <Row>
                          <Col md={3}>
                            <img className="image_klinik" src={k.image} alt="" />
                          </Col>
                          <Col>
                            <h1 className="name_klinik">{k.name}</h1>
                            <h1 className="jenis_klinik">{k.jenis}</h1>
                            <h1 className="lokasi_klinik">{k.lokasi}</h1>
                            <Col className="d-flex justify-content-end mt-4">
                              <Button className="button_dokter">Booking Sekarang</Button>
                            </Col>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="testiva">
                <Row className="mt-5">
                  <Col md={4}>
                    <div className="lokasi_container">
                      <Row className="mb-3 text_lokasi">
                        <Col className="d-flex justify-content-center align-items-center lokasi_space">
                          <i className="fa-solid fa-location-dot location_dot mx-1"></i> Lokasi
                        </Col>
                        <Col className="mb-1">
                          <a href="" className="link_detail">
                            Detail lokasi
                          </a>
                        </Col>
                      </Row>
                      <Row>
                        <div className="container_lokasi"></div>
                      </Row>
                      <Row className="mt-4 mb-2">
                        <Form>
                          {['radio'].map((type) => (
                            <div key={`reverse-${type}`} className="mb-3 ">
                              <Form.Check label="Semua lokasi" name="group1" type={type} id={`${type}-1`} />
                              <Form.Check label="Terdekat" name="group1" type={type} id={`${type}-2`} />
                            </div>
                          ))}
                        </Form>
                      </Row>
                      <Row>
                        <div className="container_lokasi"></div>
                      </Row>
                      <Row className="mt-4 mb-2">
                        <Form>
                          {['radio'].map((type) => (
                            <div key={`reverse-${type}`} className="mb-3 ">
                              <Form.Check label="Jakarta" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Bogor" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Depok" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Tangerang" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Bekasi" name="group1" type={type} id={`${type}-2`} />
                            </div>
                          ))}
                        </Form>
                      </Row>
                    </div>
                  </Col>
                  <Col md={8}>
                    {klinik.map((k) => (
                      <div key={k.id} className="container_klinik">
                        <Row>
                          <Col md={3}>
                            <img className="image_klinik" src={k.image} alt="" />
                          </Col>
                          <Col>
                            <h1 className="name_klinik">{k.name}</h1>
                            <h1 className="jenis_klinik">{k.jenis}</h1>
                            <h1 className="lokasi_klinik">{k.lokasi}</h1>
                            <Col className="d-flex justify-content-end mt-4">
                              <Button className="button_dokter">Booking Sekarang</Button>
                            </Col>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="vaksinasihpv">
                <Row className="mt-5">
                  <Col md={4}>
                    <div className="lokasi_container">
                      <Row className="mb-3 text_lokasi">
                        <Col className="d-flex justify-content-center align-items-center lokasi_space">
                          <i className="fa-solid fa-location-dot location_dot mx-1"></i> Lokasi
                        </Col>
                        <Col className="mb-1">
                          <a href="" className="link_detail">
                            Detail lokasi
                          </a>
                        </Col>
                      </Row>
                      <Row>
                        <div className="container_lokasi"></div>
                      </Row>
                      <Row className="mt-4 mb-2">
                        <Form>
                          {['radio'].map((type) => (
                            <div key={`reverse-${type}`} className="mb-3 ">
                              <Form.Check label="Semua lokasi" name="group1" type={type} id={`${type}-1`} />
                              <Form.Check label="Terdekat" name="group1" type={type} id={`${type}-2`} />
                            </div>
                          ))}
                        </Form>
                      </Row>
                      <Row>
                        <div className="container_lokasi"></div>
                      </Row>
                      <Row className="mt-4 mb-2">
                        <Form>
                          {['radio'].map((type) => (
                            <div key={`reverse-${type}`} className="mb-3 ">
                              <Form.Check label="Jakarta" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Bogor" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Depok" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Tangerang" name="group1" type={type} id={`${type}-2`} />
                              <Form.Check label="Bekasi" name="group1" type={type} id={`${type}-2`} />
                            </div>
                          ))}
                        </Form>
                      </Row>
                    </div>
                  </Col>
                  <Col md={8}>
                    {klinik.map((k) => (
                      <div key={k.id} className="container_klinik">
                        <Row>
                          <Col md={3}>
                            <img className="image_klinik" src={k.image} alt="" />
                          </Col>
                          <Col>
                            <h1 className="name_klinik">{k.name}</h1>
                            <h1 className="jenis_klinik">{k.jenis}</h1>
                            <h1 className="lokasi_klinik">{k.lokasi}</h1>
                            <Col className="d-flex justify-content-end mt-4">
                              <Button className="button_dokter">Booking Sekarang</Button>
                            </Col>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default LayananDetail;
