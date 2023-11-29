import {useState} from 'react'
import {Button, Col, Container, Row, Tabs,Tab ,Form, Modal} from 'react-bootstrap';
import NavbarAuth from '../landing_page/navbar/NavbarAuth';
import Footer from '../landing_page/footer/Footer';
import pprofile from '../../../src/assets/img/potoprofil.png'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const linkJanjISaya = useNavigate ();


     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

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
                <h2 className="profil-saya-1 mt-5">
                  <a href="">Profil Saya</a>
                </h2>
                <h2 className="janji-saya-1 mt-5 mb-5">
                  <a href="" onClick={() => linkJanjISaya("/janji_saya")}>
                    Janji Saya
                  </a>
                </h2>

                <hr />
                <h2 className="keluar ">
                  <a href="">Keluar</a>
                </h2>
              </div>
            </Col>

            <Col className="card-data-profile-2">
              <h2 className="Profil-saya-2 mx-5">Profil Saya</h2>
              <Button className="btn-ubah mx-4" onClick={handleShow}>
                Ubah
              </Button>
              <div className="card-data-profile-3 mb-4 mt-4">
                <br />
                <br />
                <Form>
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
                </Form>
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
              <Form.Control type="text" className="costum-control" />
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

        <Modal.Footer className='Footer-ubah'>
          <Button variant="" className='costum-btn' onClick={handleClose}>
            Simpan Perubahan
          </Button>
        </Modal.Footer>
      </Modal>

      <br />
      <Footer />
    </div>
  );
}

export default Profile
