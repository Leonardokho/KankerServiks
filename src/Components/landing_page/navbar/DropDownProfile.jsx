// import { Container, Col, Row, Button, Modal } from 'react-bootstrap/Container';
// import { useState } from 'react';
// import './NavbarNotAuth.css';

// function LogOutBox(props) {
//   return (
//     <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
//       <Modal.Body className="grid-example">
//         <Container>
//           <Row>
//           </Row>
//         </Container>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function ModalLogOut() {
//   const [modalShow, setModalShow] = useState(false);

//   return (
//     <>
//       <h1 onClick={() => setModalShow(true)} className="dropdownmenu">
//         Keluar
//       </h1>

//       <LogOutBox show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   );
// }

// const DropDownProfile = () => {
//   return (
//     <div className="flex flex-col dropdownprofile">
//       <div className="flex flex-col">
//         <h1 onClick={{}} className="dropdownmenu mb-3">
//           Pengaturan
//         </h1>
//         <div className="bardropdown"></div>
//         <ModalLogOut />
//       </div>
//     </div>
//   );
// };

// export default DropDownProfile;
