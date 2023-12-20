import { Button, Col, Container, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { sendOtpWhatsapp, updateStatus } from "../../features/consultationSlice";
import { useEffect, useState } from "react";
import { openModal } from "../../features/modalSlice";

const SendOtp = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    const dispatch = useDispatch();
    const otpStatus = useSelector(state => state.consultation.status, shallowEqual);


    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const handleSendOtp = () => {
        const data = {
            phone_number: phoneNumber,
            doctor_id: props.doctorId
        }
        dispatch(sendOtpWhatsapp(data));
    }

    const validatePhoneNumber = (phoneNumber) => {
        // const phoneNumberPattern = /^\d{12}$/;
        return phoneNumber.length < 15 && phoneNumber.length > 10;
    };


    useEffect(() => {
        if (otpStatus == 'succeeded') {
            dispatch(openModal({ name: 'VerifyOtp' }));
        }
        return () => {
            dispatch(updateStatus({status: 'idle'}));
        }
    }, [otpStatus, dispatch]);


    return (
        <div className="grid-example">
            <Container>
                <Row className="modalstext mt-3">
                    <div>
                        <Col>
                            <h1 className="title_telepon">Masukkan Nomor Whatsapp Aktif</h1>
                        </Col>
                        {/* <h6>
                            <span className="text-1">Masukkan Nomor Ponsel</span> Untuk Melanjutkan Proses Konsultasi Di <span className="text-2">Cervicare+</span>{' '}
                        </h6> */}
                    </div>
                    <Row>
                        <Col className="mt-4">
                            <label>
                                <PhoneInput inputClass="input_telepon" containerClass="container_telepon" dropdownClass="dropdown_country" disableDropdown={true} onlyCountries={['id']} country={'id'} value={phoneNumber} countryCodeEditable={false} onChange={handleChange} inputProps={{ required: true, autoFocus: true }} masks={{ id: '...-....-.....' }} />
                            </label>
                            {!valid && <p className="hint_telepon mt-3">Masukkan Nomor Telepon Anda</p>}
                        </Col>
                    </Row>

                    <h6 className="mt-4">
                        {' '}
                        Dengan ini, Saya Menyetujui <a href="">ketentuan Pengguna</a> Dan <a href="">Kebijakan Privasi</a> <span className="text-2">Cervicare+</span>{' '}
                    </h6>
                    <Button className="button_modals mt-3" onClick={handleSendOtp}>
                        <i className="fa-brands fa-whatsapp fa-2xl whatsapp-icon"></i> Kirim Kode Melalui WhatsApp
                    </Button>
                    {/* <Button className="button_modals mt-3" onClick={() => setVerification(true)}>
                  <i className="fa-regular fa-envelope fa-xl envelope-icon"></i> Kirim Kode Melalui Pesan
                </Button> */}
                </Row>
            </Container>
        </div>
    );
}

export default SendOtp;