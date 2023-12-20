import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import loginimgmodals from '../../assets/img/Group 111.png';

const MustLogin = () => {
    const linkLogin = useNavigate();
    return (
        <div>
            <Container>
                <Row>
                    <Col md={7} className="d-flex justify-content-center align-items-center">
                        <Row className="modalstext">
                            <h1>Heyy,</h1>
                            <h6>untuk mengakses halaman ini kamu harus login terlebih dahulu ya...</h6>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <img src={loginimgmodals} alt="" />
                    </Col>
                    <Button className="button_modals mt-5" onClick={() => linkLogin('/login')}>
                        Login
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default MustLogin;