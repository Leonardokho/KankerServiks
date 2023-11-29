import React from "react";
import { Button, Col, Container, Row, Tabs, Tab, Form ,Nav} from "react-bootstrap";
import NavbarAuth from "../landing_page/navbar/NavbarAuth";
import pprofile from "../../../src/assets/img/potoprofil.png";
import { useNavigate } from "react-router-dom";
import "./Janji_saya.css";
const Janji_saya = () => {
    const linkProfile = useNavigate ();
  return (
    <div>
      <NavbarAuth />
      <br />
      <br />
      <Container>
        <Row className="">
          <Col className="card-profile mt-5">
            <Col className="mt-5  mx-4 card-data-profile">
              <div className="card-img">
                <img className="pp-img mt-5 mb-3" src={pprofile} alt="" />
                <Button className="edit-img">
                  <i class="fa-solid fa-pen"></i>
                </Button>
              </div>
              <div className=" mx-4">
                <h2 className="name">Raseta Putri Wahyu</h2>
                <h2 className="status">Mahasiswa</h2>
                <hr />
                <h2 className="profil-saya mt-5">
                  <a href="" onClick={() => linkProfile("/profile")}>
                    Profil Saya
                  </a>
                </h2>
                <h2 className="janji-saya mt-5 mb-5">
                  <a href="">Janji Saya</a>
                </h2>

                <hr />
                <h2 className="keluar ">
                  <a href="">Keluar</a>
                </h2>

                <Tab.Container id="example" defaultActiveKey="profil-saya" fill>
                  <Row>
                    <Col sm={12} c>
                      <Nav variant="pills" className="mb-4 gap-4 mx-5" fill>
                        <Nav.Item>
                          <Nav.Link eventKey="profil-saya" className=" costum-tab">
                            profil saya
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="janji" className=" costum-tab">
                            janji saya
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="profil-saya">tes1</Tab.Pane>
                        <Tab.Pane eventKey="janji">\tes2</Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Col>

            <Col className="card-data-profile-2">
              <h2 className="Profil-saya-2 mx-5">Janji Saya</h2>
              <div className="card-data-profile-3 mb-4 mt-4">
                <br />
                <br />
                <Tab.Container id="left-tabs-example" defaultActiveKey="semua" fill>
                  <Row>
                    <Col sm={12} className="">
                      <Nav variant="pills" className="mb-4 gap-4 mx-5" fill>
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
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="semua">tes1</Tab.Pane>
                        <Tab.Pane eventKey="aktif">\tes2</Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Janji_saya;
