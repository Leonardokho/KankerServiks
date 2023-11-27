import React from "react";
import { Button, Col, Container, Row, Tabs, Tab, Form } from "react-bootstrap";
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
                  <a href="" onClick={()=> linkProfile ('/profile')}>Profil Saya</a>
                </h2>
                <h2 className="janji-saya mt-5 mb-5">
                  <a href="" >Janji Saya</a>
                </h2>

                <hr />
                <h2 className="keluar ">
                  <a href="">Keluar</a>
                </h2>
              </div>
            </Col>

            <Col className="card-data-profile-2">
              <h2 className="Profil-saya-2 mx-5">Janji Saya</h2>
              <div className="card-data-profile-3 mb-4 mt-4">
                <br />
                <br />
                {/* <Form>
                  <Form.Group className="mb-3 mx-5 " controlId="tanggal_lahir">
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
                </Form> */}
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Janji_saya;
