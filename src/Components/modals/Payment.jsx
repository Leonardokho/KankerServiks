import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkPayment, createPayment } from "../../features/paymentSlice";
import BSI from '../../assets/img/frame 71.png';
import BCA from '../../assets/img/frame 72.png';
import Mandiri from '../../assets/img/frame 73.png';
import BNI from '../../assets/img/frame 74.png';
import BRI from '../../assets/img/frame 75.png';
import Dana from '../../assets/img/frame 76.png';
import Gopay from '../../assets/img/frame 77.png';
import { openModal } from "../../features/modalSlice";

const Payment = () => {
    // const white = '3px solid white';
    // const [bgColor, setBgColor] = useState(white);
    // const changeColor = () => {
    //   const pink = '3px solid #f31559';
    //   setBgColor(pink);
    // };
    const dispatch = useDispatch();
    const doctorId = useSelector(state => state.consultation.consultation[0]);
    const fetchPaymentStatus = useSelector(state => state.payment.status);
    const paymentStatus = useSelector(state => state.payment.payment?.status || '');
    const payment = useSelector(state => state.payment.payment);

    const handleClickPayment = () => {
        dispatch(createPayment(doctorId));
    }

    const handleCheckPayment = () => {
        dispatch(checkPayment(payment.orderId));
    }

    useEffect(() => {
        if (paymentStatus === 'PAID') {
            dispatch(openModal({name: 'ChatDoctor'}))
        }
    
        if (fetchPaymentStatus === 'succeeded') {
            window.open(payment.paymentUrl, '_blank', 'noopener');
        }
      return () => {
        
      }
    }, [dispatch, paymentStatus, fetchPaymentStatus, payment.paymentUrl])
    

    return (
        <div>
            <Container className="grid-example">
                <Row>
                    <div className="mt-2">
                        <Row>
                            <Col>
                                <h1 className="title-pembayaran">Boleh Selesaikan Proses</h1>
                                <h1 className="title-pembayaran">Ini Dulu Ya...</h1>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-5">
                        <Row>
                            <Col>
                                <h1 className="title-biaya">Biaya Per 30 Menit :</h1>
                                <h1 className="title-biaya">Biaya Layanan :</h1>
                            </Col>
                            <Col>
                                <h1 className="desc-biaya">Rp. 20.000</h1>
                                <h1 className="desc-biaya">Rp. 1.000</h1>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-5">
                        <h1 className="title-total">Total</h1>
                        <h1 className="total-biaya">Rp 21.000</h1>
                        <h1 className="title-total">Pembayaran Melalui :</h1>
                    </div>
                    <div className="mt-4 button-bank">
                        <div className="bg_card">
                            <img src={BSI} alt="gambar" />
                        </div>
                        <div className="bg_card">
                            <img src={BCA} alt="gambar" />
                        </div>
                        <div className="bg_card">
                            <img src={Mandiri} alt="gambar" />
                        </div>
                        <div className="bg_card">
                            <img src={BNI} alt="gambar" />
                        </div>
                        <div className="bg_card">
                            <img src={BRI} alt="gambar" />
                        </div>
                        <div className="bg_card">
                            <img src={Dana} alt="gambar" />
                        </div>
                        <div className="bg_card">
                            <img src={Gopay} alt="gambar" />
                        </div>
                    </div>
                    {payment && payment.paymentUrl ?
                        <Button className="button_modals mt-5" onClick={handleCheckPayment}>
                            Cek Pembayaran
                        </Button> :
                        <Button className="button_modals mt-5" onClick={handleClickPayment}>
                            Bayar
                        </Button>
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Payment;