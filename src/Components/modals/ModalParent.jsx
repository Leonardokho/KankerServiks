import { useDispatch, useSelector } from "react-redux";
import DetailDoctor from "./DetailDoctor";
import '../konsultasi_page/Konsultasi_page.css';
import { closeModal } from "../../features/modalSlice";
import { Modal } from "react-bootstrap";
import MustLogin from "./MustLogin";
import SendOtp from "./SendOtp";
import VerifyOtp from "./VerifyOtp";
import Payment from "./Payment";
import ChatDoctor from "./ChatDoctor";

const ModalParent = () => {
    const dispatch = useDispatch();
    const { isOpen, componentName, childrenProps, sizeModal } = useSelector(state => state.modal);
    const closeModalHandler = () => dispatch(closeModal(componentName));

    let componentsLookUp = { 
        'DetailDoctor': DetailDoctor,
        'MustLogin': MustLogin,
        'SendOtp': SendOtp,
        'VerifyOtp': VerifyOtp,
        'Payment': Payment,
        'ChatDoctor': ChatDoctor,
     };

    let RenderComponent;

    if (componentName) {
        const SelectedComponent = componentsLookUp[componentName];

        if(SelectedComponent){
            RenderComponent = <SelectedComponent {...childrenProps} />
        }
    }

    return (
        <>
            <Modal show={isOpen} onHide={closeModalHandler} size={sizeModal}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal title</Modal.Title> */}
                </Modal.Header>

                <Modal.Body>
                    {RenderComponent}
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ModalParent;