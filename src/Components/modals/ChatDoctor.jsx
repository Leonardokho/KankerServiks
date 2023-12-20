import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import doktersatu from '../../assets/img/doktersatu.png';
import { useSelector } from "react-redux";
import { selectDoctorById } from "../../features/consultationSlice";

const ChatDoctor = () => {
    // const [livechat, setLiveChat] = useState(false);
    const linkLiveChat = useNavigate();
    const doctorId = useSelector(state => state.consultation.consultation[0]);
    const doctor = useSelector(state => selectDoctorById(state, doctorId))

    const { registration_certificate, alumnus, practice_location, work_lifetime, name } = doctor;
    const formattedName = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    return (
        <div >
            <Container className="grid-example">
                <Row>
                    <Col>
                        <img className="bg-detail-dokter" src={doktersatu} alt="gambar" />
                        <h1 className="name-dok mb-3">{formattedName}</h1>
                        <i className="fa-solid fa-star fa-stars fa-2xl"></i>
                        <i className="fa-solid fa-star fa-stars fa-2xl"></i>
                        <i className="fa-solid fa-star fa-stars fa-2xl"></i>
                        <i className="fa-solid fa-star fa-stars fa-2xl"></i>
                        <i className="fa-solid fa-star fa-stars fa-2xl"></i>
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
                            <p>{alumnus}</p>
                        </Row>
                        <Row className="detail_title_desc">
                            <h1>Lokasi Praktik</h1>
                            <p>{practice_location}</p>
                        </Row>
                        <Row className="detail_title_desc">
                            <h1>lama bekerja</h1>
                            <p>{work_lifetime} tahun</p>
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
                    <Button className="button_modals" onClick={() => linkLiveChat('/live_chat')}>
                        Chat Sekarang
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ChatDoctor;