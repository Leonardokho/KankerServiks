
// import {Container , Navbar, Nav} from "react-bootstrap"
import { Container, Row, Col, Card} from "react-bootstrap";
import ccLogo1 from "../src/assets/img/cc-Logo1.png"
import imgdoctor from "../src/assets/img/asian-young-main-group-hospital-professional-removebg-preview 1.png";
const Login = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className="box box-white">
          <div className="  card-1">
            <img className="logo" src={ccLogo1} alt="logo" />
            <div className="card-lingkar">
              <img className="img-dc" src={imgdoctor} alt="" />
            </div>
            <div className="card-title">
              <p>#cegahkankerserviks</p>
            </div>
          </div>
        </Col>

        <Col md={6} className="box box-red">
          <div className=" card-2"> gfer </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login
