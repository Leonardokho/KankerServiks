import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import VerificationInput from "react-verification-input";
import { verifyOtpWhatssapp } from "../../features/consultationSlice";
import { openModal } from "../../features/modalSlice";
import '../konsultasi_page/Konsultasi_page.css';

const VerifyOtp = () => {
    // const [otp, setOtp] = useState('');
    // const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const otpStatus = useSelector(state => state.consultation.status);
    const verifyOtp = () => {
        const data = {
            otp_code: otp
        }
        dispatch(verifyOtpWhatssapp(data));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                // if (minutes === 0) {
                //   clearInterval(interval);
                // } else {
                //   setSeconds(59);
                //   setMinutes(minutes - 1);
                // }
            }
        }, 1000);

        if (otpStatus === 'succeeded') {
            dispatch(openModal({ name: 'Payment', sizeModal: 'lg' }));
        }
        return () => {
            clearInterval(interval);
        };
    }, [seconds, otpStatus, dispatch]);

    const resendOTP = () => {
        // setMinutes(1);
        setSeconds(5);
    };

    return (
        <div className="grid-example">
            <Container>
                <Row className="modalstext">
                    <div>
                        <Col>
                            <h1 className="title_verif mt-3">Masukkan Kode Verifikasi</h1>
                        </Col>
                        <h6>
                            <span className="text-1">Masukkan 6 Digit Kode </span> Yang Dikirim Ke Nomor Yang Kamu Masukkan
                        </h6>
                    </div>

                    <Col>
                        <Row className="mx-5 mt-5">
                            <VerificationInput
                                onChange={(value) => setOtp(value)}
                                placeholder=""
                                classNames={{
                                    container: 'container_verification',
                                    character: 'character_verification',
                                }}
                                validChars='0-9'
                            />
                        </Row>
                        <Row className="mt-5">
                            <div className="countdown-text">
                                {seconds > 0 ? (
                                    <p>
                                        Mohon Tunggu <span className="text-1">{seconds < 10 ? `0${seconds}` : seconds} Detik</span> Untuk Kirim Ulang kode
                                    </p>
                                ) : (
                                    <Row className="mx-3">
                                        <p>Tidak Menerima Kode Verifikasi?</p>

                                        <Col>
                                            <button
                                                disabled={seconds > 0}
                                                style={{
                                                    border: 'none',
                                                    background: 'none',
                                                    color: seconds > 0 ? '#DFE3E8' : '#FF5630',
                                                }}
                                                onClick={resendOTP}
                                            >
                                                Kirim Ulang
                                            </button>
                                        </Col>
                                    </Row>
                                )}
                            </div>
                        </Row>
                    </Col>
                    <Button className="button_modals mt-4" onClick={verifyOtp}>
                        Verifikasi
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default VerifyOtp;