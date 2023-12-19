import NavbarAuth from '../landing_page/navbar/NavbarAuth';
import Footer from '../landing_page/footer/Footer';
import pprofile from '../../../src/assets/img/potoprofil.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row, Nav, Tab, Form, Modal } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const linkHome = useNavigate();

  return (
    <div>
      <NavbarAuth />
      <br />
      <br />
      <Container>
        <Row className="">
          <Col className="card-profile mt-5">
            <Col className="mt-5 mx-4 card-data-profile">
              <div className="card-img">
                <img className="pp-img mt-5 mb-3" src={pprofile} alt="" />
                <Button className="edit-img">
                  <i className="fa-solid fa-pen"></i>
                </Button>
              </div>
              <div className="mx-4">
                <h2 className="name">Raseta Putri Wahyu</h2>
                <h2 className="status">Mahasiswa</h2>
                <hr />
                <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                  <Row>
                    <Col>
                      <Nav variant="pills" className="flex-column nav_pill_profile">
                        <Nav.Item className="nav_item_profile">
                          <Nav.Link eventKey="profile" className="nav_link_profile">
                            Profil Saya
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav_item_profile">
                          <Nav.Link eventKey="janjisaya" className="nav_link_profile">
                            Janji Saya
                          </Nav.Link>
                        </Nav.Item>
                        <hr />
                        <h2 className="keluar mt-3" onClick={() => linkHome('/')}>
                          Keluar
                        </h2>
                      </Nav>
                      <div className="margin-profile"></div>
                      <Col className="card-data-profile-2">
                        <div className="card-data-profile-3 mb-4 mt-4">
                          <Col>
                            <Tab.Content>
                              <Tab.Pane eventKey="profile">
                                <h2 className="Profil-saya-2 mx-5">Profil Saya</h2>
                                <Button className="btn-ubah mx-4" onClick={handleShow}>
                                  Ubah
                                </Button>
                                <Form className="isi-profile-kanan">
                                  <Form.Group className="mb-3 mx-5" controlId="tanggal_lahir">
                                    <Form.Label className="label">Tanggal Lahir</Form.Label>
                                    <Form.Control type="text" readOnly className="costum-control" />
                                  </Form.Group>
                                  <Form.Group className="mb-3 mx-5" controlId="Jenis-kl">
                                    <Form.Label className="label">Jenis Kelamin</Form.Label>
                                    <Form.Control type="text" readOnly className="costum-control" />
                                  </Form.Group>
                                  <Form.Group className="mb-3 mx-5" controlId="no-hp">
                                    <Form.Label className="label">Nomor Hp</Form.Label>
                                    <Form.Control type="text" readOnly className="costum-control" />
                                  </Form.Group>
                                  <Form.Group className="mb-3 mx-5" controlId="email">
                                    <Form.Label className="label">Alamat Email</Form.Label>
                                    <Form.Control type="text" readOnly className="costum-control" />
                                  </Form.Group>
                                </Form>
                              </Tab.Pane>
                              <Tab.Pane eventKey="janjisaya">
                                <h2 className="Profil-saya-2 mx-5">Janji Saya</h2>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="semua" fill>
                                  <Row className="isi-janji-kanan">
                                    <Nav variant="pills" className="mb-4 row-nav">
                                      <Nav.Item>
                                        <Nav.Link eventKey="semua" className=" costum-tab">
                                          Semua
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                        <Nav.Link eventKey="aktif" className=" costum-tab">
                                          Aktif
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                        <Nav.Link eventKey="selesai" className=" costum-tab">
                                          Selesai
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                        <Nav.Link eventKey="batal" className="costum-tab">
                                          Batal
                                        </Nav.Link>
                                      </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                      <Tab.Pane eventKey="semua">
                                        <Row className="row_janjisaya">
                                          <h1 className="title-belum">Belum Pernah Janji Konsultasi</h1>
                                          <h1 className="title-ayo mt-2">Ayo buat janji konsultasi dengan dokter</h1>
                                          <h1 className="title-proses">proses registrasi mudah dan singkat</h1>
                                          <div className="mt-2">
                                            <Button className="button_konsultasi_profile">Konsultasi sekarang</Button>
                                          </div>
                                        </Row>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="aktif">
                                        <Row className="row_janjisaya">
                                          <h1 className="title-belum">Belum Pernah Janji Konsultasi</h1>
                                          <h1 className="title-ayo mt-2">Ayo buat janji konsultasi dengan dokter</h1>
                                          <h1 className="title-proses">proses registrasi mudah dan singkat</h1>
                                          <div className="mt-2">
                                            <Button className="button_konsultasi_profile">Konsultasi sekarang</Button>
                                          </div>
                                        </Row>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="selesai">
                                        <Row className="row_janjisaya">
                                          <h1 className="title-belum">Belum Pernah Janji Konsultasi</h1>
                                          <h1 className="title-ayo mt-2">Ayo buat janji konsultasi dengan dokter</h1>
                                          <h1 className="title-proses">proses registrasi mudah dan singkat</h1>
                                          <div className="mt-2">
                                            <Button className="button_konsultasi_profile">Konsultasi sekarang</Button>
                                          </div>
                                        </Row>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="batal">
                                        <Row className="row_janjisaya">
                                          <h1 className="title-belum">Belum Pernah Janji Konsultasi</h1>
                                          <h1 className="title-ayo mt-2">Ayo buat janji konsultasi dengan dokter</h1>
                                          <h1 className="title-proses">proses registrasi mudah dan singkat</h1>
                                          <div className="mt-2">
                                            <Button className="button_konsultasi_profile">Konsultasi sekarang</Button>
                                          </div>
                                        </Row>
                                      </Tab.Pane>
                                    </Tab.Content>
                                  </Row>
                                </Tab.Container>
                              </Tab.Pane>
                            </Tab.Content>
                          </Col>
                        </div>
                      </Col>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>

      {/* POPUP-MODAL */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="modal-ubah">
          <Modal.Title className="ubah-title">Ubah Data Diri</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 mx-5 " controlId="tanggal_lahir">
              <Form.Label className="label">Tanggal Lahir</Form.Label>
              <Form.Control type="date" className="costum-control" />
            </Form.Group>

            <Form.Group className="mb-3 mx-5" controlId="Jenis-kl">
              <Form.Label className="label">Jenis Kelamin</Form.Label>
              <Form.Select className="costum-control">
                <option value="1">Laki-laki</option>
                <option value="2">Perempuan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mx-5" controlId="no-hp">
              <Form.Label className="label">Nomor Hp</Form.Label>
              <Form.Control type="text" className="costum-control" />
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="email">
              <Form.Label className="label">Alamat Email</Form.Label>
              <Form.Control type="email" className="costum-control" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="Footer-ubah">
          <Button variant="" className="costum-btn" onClick={handleClose}>
            Simpan Perubahan
          </Button>
        </Modal.Footer>
      </Modal>

      <br />
      <Footer />
    </div>
  );
};

export default Profile;
