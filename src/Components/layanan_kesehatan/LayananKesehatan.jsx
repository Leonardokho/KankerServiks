import '../landing_page/header_landingpage/Header.css';
import { Container, Row, Col, Button, Card, Stack, Spinner } from 'react-bootstrap';
import femaleDoctorImage from '../../assets/img/female-doctor.png';
import Footer from '../landing_page/footer/Footer';
import PapSmearIcon from '../../assets/img/pap-smear-icon.svg';
import IvaTestIcon from '../../assets/img/iva-test-icon.svg';
import HpvIcon from '../../assets/img/hpv-icon.svg';
import PuskesmasSambas from '../../assets/img/faskes/faskes3.png';
import { useNavigate } from 'react-router-dom';
import NavbarNotAuth from '../landing_page/navbar/NavbarNotAuth';
import './LayananKesehatan.css';
import NavbarAuth from '../landing_page/navbar/NavbarAuth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHealthFacilities, selectAllHealthFacilities } from '../../features/healthFacilitiesSlice';

const HealthFacilitiesExcerpt = ({ healthFacility }) => {
  return (
    <div className="p-2">
      <Card style={{ width: '23rem', height: '20rem' }} className="card_faskes rounded-4 border-0">
        <Card.Img style={{ height: '14rem' }} src={PuskesmasSambas} />
        <Card.Body className='text_fas'>
          <h5>{healthFacility.name}</h5>
          <Card.Text className="text-muted">{healthFacility.type}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
};


const LayananKesehatan = () => {
  const linkDetailLayananKesehatan = useNavigate();
  const token = sessionStorage.getItem('token');
  const dispatch = useDispatch();
  const healthFacilities = useSelector(selectAllHealthFacilities);
  const postStatus = useSelector(state => state.healthFacilities.status)
  const error = useSelector(state => state.healthFacilities.error)
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchHealthFacilities())
    }
  }, [postStatus, dispatch, healthFacilities])

  let content;

  if (postStatus === 'loading') {
    content = <Spinner animation="grow" variant="danger" />
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    content = healthFacilities.map((healthFacility, key) => (
      <HealthFacilitiesExcerpt key={key} healthFacility={healthFacility} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <>
      {token ? <NavbarAuth /> : <NavbarNotAuth />}
      <div className="header_bg_layanan">
        <Container>
          <Row className="mt-5 py-5">
            <Col md={6}>
              <br />
              <br />
              <br />
              <div className=" head_left">
                <div className="w-200 mt-5 title">
                  <h1 style={{ color: '#061D4A' }} className="fw-bold">
                    Langkah Awal Melawan Kanker Serviks
                  </h1>
                  <h5 className="mt-3" style={{ color: '#061D4A', fontFamily: 'Montserrat' }}>
                    Skrining dan Vaksinasi HPV Anda di Sini!
                  </h5>
                </div>
                <Col className="mt-3">
                  <Button onClick={() => linkDetailLayananKesehatan('/Layanan_Kesehatan_Detail')} className="button_mulai_layanan mt-3 mb-4">
                    Mulai Sekarang
                  </Button>
                </Col>
              </div>
            </Col>
            <Col md={6}>
              <div className="head-right">
                <div className="imageContainer d-flex justify-content-end align-items-center">
                  <img src={femaleDoctorImage} alt="doctor" className="image_layanan" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div>
          <div className="desc_services my-3 mt-5">
            <h1>Layanan Kesehatan Kami</h1>
            <h5 className="text-center">Pilih layanan kesehatan sesuai kebutuhan anda!</h5>
          </div>
        </div>
        <div className='isi_layanan'>
          <Stack direction="horizontal" gap={5} className="p-5 mx-auto">
            <Card style={{ width: '20rem', height: '20rem' }} className="p-3 shadow-none border-2 rounded-4">
              <Card.Img className="m-3" variant="left" src={PapSmearIcon} style={{ width: '90px' }} />
              <Card.Body>
                <p className="fw-bolder fs-4 title_kes">Pap Smear</p>
                <Card.Text className='desc_kes' style={{ textAlign: 'justify', fontSize: '14px' }}>metode pemeriksaan yang dilakukan untuk mendeteksi kanker leher rahim (serviks) pada wanita</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', backgroundColor: '#F31559', height: '20rem' }} className="pt-4 pb-2 px-3 text-white shadow-none rounded-4">
              <Card.Img className="m-3" src={IvaTestIcon} style={{ width: '90px' }} />
              <Card.Body>
                <p className="fw-bolder fs-4 title_kes">IVA test</p>
                <Card.Text className='desc_kes' style={{ textAlign: 'justify', fontSize: '14px' }}>Pemeriksaan visual leher rahim dengan asam asetat encer tanpa alat pembesar.</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', height: '20rem' }} className="pt-4 pb-2 px-3 shadow-none border-2 rounded-4">
              <Card.Img className="m-3" src={HpvIcon} style={{ width: '90px' }} />
              <Card.Body>
                <p className="fw-bolder fs-4 title_kes">Vaksinasi HPV</p>
                <Card.Text className='desc_kes' style={{ textAlign: 'justify', fontSize: '14px' }}>program imunisasi untuk melindungi tubuh dari infeksi human papillomavirus (HPV)</Card.Text>
              </Card.Body>
            </Card>
          </Stack>
        </div>

      </Container>

      <Container className="py-5">
        <h1 className="title_faskes">Pilih tempat Faskes terdekat</h1>
        <Stack>
          <div>
            <h6 className="desc_faskes">Berbagai pilihan tempat Faskes</h6>
          </div>
          <div className="ms-auto">
            <a onClick={() => linkDetailLayananKesehatan('/Layanan_Kesehatan_Detail')} className="linkArtikel">
              Lihat Semuanya
            </a>
          </div>
        </Stack>
        <Stack direction="horizontal" className="p-5">
          {content}
        </Stack>
      </Container>

      <Footer />
    </>
  );
};

export default LayananKesehatan;
