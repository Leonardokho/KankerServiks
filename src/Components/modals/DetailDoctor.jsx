import { Button, Col, Container, Row } from "react-bootstrap";
import doctorImage from '../../assets/img/doktersatu.png';
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modalSlice";

const DetailDoctor = (doctor) => {
    const { registration_certificate, name, alumnus, practice_location, work_lifetime } = doctor;
    const dispatch = useDispatch();

    const formattedName = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    const chatNow = () => {
        dispatch(openModal({ name: 'SendOtp', childrenProps: doctor, sizeModal: 'lg' }));
    }

    return (
        <div className="grid-example">
            <Container>
                <Row>
                    <Col>
                        <img className="bg-detail-dokter" src={doctorImage} alt="gambar" />
                        <h1 className="name-dok mb-3">{formattedName}</h1>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <i key={index} className="fa-solid fa-star fa-stars fa-2xl"></i>
                        ))}
                    </Col>
                    <Col className=" mt-2">
                        <Row className="detail_title_desc">
                            <Col>
                                <h1>Nomor STR</h1>
                                <p>{registration_certificate}</p>
                            </Col>
                        </Row>
                        <Row className="detail_title_desc">
                            <h1>Lulusan</h1>
                            <p>{alumnus}, 2016</p>
                        </Row>
                        <Row className="detail_title_desc">
                            <h1>Lokasi Praktik</h1>
                            <p>{practice_location}</p>
                        </Row>
                        <Row className="detail_title_desc">
                            <h1>Lama Bekerja</h1>
                            <p>{work_lifetime} Tahun</p>
                        </Row>
                        {/* <Row className="detail_title_desc">
                    <h1>Status</h1>
                    <div className="bg-status">
                      <h1>Online</h1>
                    </div>
                  </Row> */}
                    </Col>
                </Row>
                <Row className="mt-5">
                    <h1 className="harga_dokter">Rp. 20.000</h1>
                    <Button className="button_modals" onClick={chatNow}>
                        Chat Sekarang
                    </Button>
                </Row>
            </Container>
        </div>
    );
}


export default DetailDoctor