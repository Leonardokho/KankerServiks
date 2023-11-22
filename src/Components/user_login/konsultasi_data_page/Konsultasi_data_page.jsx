import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './konsultasi_data_page.css';
import doktersatu from "../../../assets/img/dokter_data_page.png";
import pria from "../../../assets/img/1.png";
import wanita from "../../../assets/img/2.png";
import Footer from '../../landing_page/footer/Footer';
const Konsultasi_data_page = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div>
      <div className="bg-body ">
        <Container>
          <Row>
            <Col className="boxs-1 mt-4 my-5">
              <div className="card">
                <Col md={8}>
                  <h1 className="text-judul mt-4 mx-4">Masukkan Informasi Dasar Kamu Sebelum Mulai Berkomunikasi</h1>
                </Col>
                <Col className="mx-4">
                  <div className="boxs-image">
                    <img src={doktersatu} alt="" />
                    <div className="boxs-bayangan"></div>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="boxs-form">
                    <p className="sub-text  mx-4"> * silahkan isi informasi dibawah ini</p>
                    <Form className="mx-4">
                      <Form.Group className="mb-3 " controlId="name">
                        <Form.Control className="costum-input" type="text" placeholder="Silahkan Masukan Nama Kamu" />
                      </Form.Group>
                      <Form.Group className="mb-3 " controlId="tanggal">
                        <Form.Control className="costum-input" type="date" />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <h2 className="jenis-kl mx-4">Jenis kelamin kamu</h2>
                <Col>
                  <Form>
                    <div className="boxs-jenis-kl">
                      <div className={`card-jenis-kl ${selectedGender === "pria" ? "selected" : ""}`} onClick={() => handleGenderChange("pria")}>
                        <img className="btn img-kl mx-4 mt-4 mb-4" src={pria} alt="" />
                        <Col>
                          <input className="btn-check" type="radio" name="option" id="pria" autoComplete="off" />
                          <label className={`gender-label mx-4 ${selectedGender === "pria" ? "selected-text" : ""}`} htmlFor="pria">Pria</label>
                        </Col>
                      </div>

                      <div className={`card-jenis-kl ${selectedGender === "wanita" ? "selected" : ""}`} onClick={() => handleGenderChange("wanita")}>
                        <img className="btn  img-kl mx-4 mt-4 mb-4" src={wanita} alt="" />
                        <Col>
                          <input className="btn-check" type="radio" name="option" id="wanita" autoComplete="off" />
                          <label className={`gender-label mx-4 ${selectedGender === "wanita" ? "selected-text" : ""}`} htmlFor="wanita">Wanita </label>
                        </Col>
                      </div>
                    </div>
                    <Col className="mx-4 my-4">
                      <Button className=" btn-costum  ">Simpan Dan Lanjutkan</Button>
                    </Col>
                  </Form>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Konsultasi_data_page;
