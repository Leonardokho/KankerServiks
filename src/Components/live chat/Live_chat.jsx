import { useRef } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import Footer from '../landing_page/footer/Footer';
import Doktersatu from '../../assets/img/doktersatu.png';
import IconeKirim from '../../assets/img/Dm.png';
import { useNavigate } from 'react-router-dom';
import './Live_chat.css';
import { useState } from 'react';

function NotifTerimaKasih(props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const linkHome = useNavigate();

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dialogClassName="box_modals_terimakasih">
      <div>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <div>
                <Col>
                  <h1 className="title-terimakasih mt-3">Terimakasih Telah Berkonsultasi</h1>
                </Col>
                <Col>
                  <h1 className="close_modals_terimakasih" onClick={props.onHide}>
                    x
                  </h1>
                </Col>
              </div>
              <h1 className="title-manfaat">Semoga Membawa Manfaat Bagi Kamu</h1>
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button type="button" key={index} className={index <= (hover || rating) ? 'on' : 'off'} onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)}>
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
              <h1 className="title-rating mt-4">Berikan Ratingmu Terhadap Kami</h1>
              <Button className="button_modals mt-4" onClick={() => linkHome('/')}>
                Kembali
              </Button>
            </Row>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
  );
}

const Live_chat = () => {
  const imageInputRef = useRef(null);
  const [notifTerimakasih, setNotifTerimakasih] = useState(false);

  const handleImageClick = () => {
    // Memicu klik pada elemen input file yang tersembunyi
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    // Menangani file gambar yang dipilih
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      // Anda dapat melakukan tindakan lebih lanjut dengan file gambar yang dipilih di sini
      console.log('Gambar yang Dipilih:', selectedImage);
    }
  };

  return (
    <div>
      <div className="bg-body">
        <Container>
          <Row className="mt-4 d-flex align-items-center justify-content-center">
            <Col md={8} className="mb-4">
              <Col className="card-live  ">
                <Col className="card-live-2 ">
                  <Col className="mx-4">
                    <img className="img-dokter my-2" src={Doktersatu} alt="" />
                    <div className="my-2 mx-2">
                      <h2 className="nama-dokter">Dr. Shofiyyah Kamilah</h2>
                      <p className="online">Online</p>
                      <Button onClick={() => setNotifTerimakasih(true)} className="btn-akhir">
                        Akhir
                      </Button>
                    </div>
                  </Col>
                </Col>

                <Col className="mx-4 mt-4 chat-container ">
                  <Col className="card-user ">
                    <Col md={5} className="card-chat-user  mb-3 ">
                      <h2 className="pesan-chat-user mx-4 py-2">Hallo Dok, Saya ingin konsultasi</h2>
                    </Col>
                    <Col md={5} className="card-chat-dokter mb-3">
                      <h2 className="pesan-chat-dokter mx-4 py-2">Baik, bisa diceritakan masalahnya apa ?</h2>
                    </Col>
                    <Col md={5} className="card-chat-user  mb-3 ">
                      <h2 className="pesan-chat-user mx-4 py-2">Jadi gini Dok, beberapa hari kebelakang ini, saya ada beberapa kali merasakan nyeri dibagian kemaluan, apa itu merupakan tanda awal dari Kanker Serviks ?i</h2>
                    </Col>
                    <Col md={5} className="card-chat-dokter mb-3">
                      <h2 className="pesan-chat-dokter  mx-4 py-2 ">
                        Iya, karena salah satu Gejala kanker serviks yang bisa Anda kenali adalah munculnya rasa nyeri pada area panggul dan perut bagian bawah. Selain itu, rasa nyeri yang muncul saat Anda berhubungan seksual, juga dapat
                        dicurigai sebagai gejala awal kanker serviks
                      </h2>
                    </Col>
                  </Col>
                </Col>

                <br />
                <Col className="card-kirim ">
                  <Col className="mx-4 d-flex align-items-center ">
                    {/* Input tersembunyi untuk memilih gambar */}
                    <input ref={imageInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />

                    {/* Ikon dan teks yang dapat diklik */}
                    <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                      <i className="  costum-icon fa-regular fa-image  my-2"></i>
                    </div>
                    <Col className="mx-3 mt-3  ">
                      <Form.Group controlId="formFile" className="mb-3 ">
                        <Form.Control type="text" placeholder="Tuliskan Pesan Kamu.." className="costum-text " />
                      </Form.Group>
                    </Col>
                    <img src={IconeKirim} alt="" className="btn  icone-kirim" />
                  </Col>
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />

      <NotifTerimaKasih show={notifTerimakasih} onHide={() => setNotifTerimakasih(false)} />
    </div>
  );
};

export default Live_chat;
