import './LayananDetailSmear2.css';
import { Tab, Container, Row, Col, Button, Nav } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import klinik1 from '../../../assets/img/place1.png';
import id from 'date-fns/locale/id';

registerLocale('id', id);

function DropDownWaktuTersedia() {
  return (
    <div className="flex flex-col dropdownwaktu mb-3">
      <div className="flex flex-col">
        <h1>
          <Row>
            <Col className="dropdownmenuwaktu">
              <h1 className="waktu-jadwal">Pagi</h1>
              <h1 className="jam-jadwal">09-00 - 11.00</h1>
              <Button className="janji-button">Buat janji</Button>
            </Col>
          </Row>
        </h1>
      </div>
    </div>
  );
}

const LayananDetailSmear2 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [openWaktu, setOpenWaktu] = useState(false);

  return (
    <div>
      <Container className="isi_papsmear2">
        <Row className="mt-5">
          <Col md={8} className="mt-5">
            <h1 className="title-klinik-detail">RS Sentra Medika Cibinong</h1>
            <img className="detail-image-smear2 mt-4" src={klinik1} alt="gambar" />
            <Container>
              <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                <Row className="mt-5">
                  <Nav variant="pills" className="nav_pill" fill>
                    <Nav.Item className="nav_item">
                      <Nav.Link eventKey="profile" className="nav_link">
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav_item">
                      <Nav.Link eventKey="detail-lainnya" className="nav_link">
                        Detail Lainnya
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="profile">
                      <Row className="container_profile">
                        <h1 className="title-smear2">Tentang Rumah Sakit / Klinik/ Puskesmas</h1>
                        <h1 className="desc-smear2">
                          RS Sentra Medika Cibinong didirikan pada tahun 2011, Merupakan Rumah Sakit Tipe B Unggulan di Cibinong, Kab. Bogor yang terakreditasi KARS Paripurna dengan kapasitas 210 Tempat Tidur. Sentra Medika Cibinong
                          dilengkapi dengan fasilitas medis yang lengkap, tenaga medis berpengalaman, dan layanan unggulan yang terbaik.
                        </h1>
                        <h1 className="title-smear2">Fasilitas Medis</h1>
                        <h1 className="desc-smear2">
                          <i className="fa-solid fa-flask"></i> Laboratorium
                        </h1>
                        <h1 className="title-smear2">Fasilitas Umum</h1>
                        <div className="flex-desc-smear2">
                          <h1 className="desc-smear2">
                            <i className="fa-solid fa-square-parking"></i> Tempat Parkir
                          </h1>
                          <h1 className="desc-smear2">
                            <i className="fa-solid fa-square-parking"></i> Tempat Tunggu
                          </h1>
                        </div>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="detail-lainnya">
                      <Row className="container_profile">
                        <h1 className="title-smear2">Pap Smear</h1>
                        <h1 className="price-smear2">Harga Rp500.000</h1>
                        <h1 className="desc-smear2">
                          Prosedur untuk mendeteksi kanker leher rahim (serviks) pada wanita. Pap smear juga dapat menemukan sel-sel abnormal (sel prakanker) di leher rahim yang dapat berkembang menjadi kanker.{' '}
                        </h1>

                        <DatePicker
                          locale="id"
                          dateFormat="EEEE, dd MMMM yyyy"
                          showIcon
                          placeholderText="Pilih Tanggal"
                          className="box-calendar mt-3"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          calendarIconClassname="calendar-icon"
                        />
                        {startDate == null ? (
                          <div className="box-waktu-tersedia mt-3">
                            <h1 className="waktu-tersedia-font">Pilih Tanggal</h1>
                          </div>
                        ) : (
                          <div className="box-waktu-tersedia mt-3" onClick={() => setOpenWaktu((prev) => !prev)}>
                            <h1 className="waktu-tersedia-font">{Intl.DateTimeFormat('id', { dateStyle: 'full' }).format(startDate)}</h1>
                            {!openWaktu ? <i className="fa-solid fa-chevron-down arrow-icon"></i> : <i className="fa-solid fa-chevron-up arrow-icon"></i>}
                          </div>
                        )}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Tab.Container>
            </Container>
          </Col>
          <Col className="mt-5">
            <div className="container-map">
              <Row className=" text_lokasi p-3">
                {/* <Map defaultZoom={8} defaultCenter={{ lat: 37.7749, lng: -122.4194 }} defaultOptions={{ disableDefaultUI: true }}>
                <MyMarker />
              </Map> */}
                <iframe
                  className="responsive-iframe map-container"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3251685765317!2d106.8631057749926!3d-6.480437893511443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1d263df61b3%3A0x2a0e106f07de739!2sSentra%20Medika%20Hospital%20Cibinong!5e0!3m2!1sid!2sid!4v1701403279716!5m2!1sid!2sid"
                ></iframe>

                <h1 className="location-klinik mt-4">
                  <i className="fa-solid fa-location-dot mx-1"></i> Jl. Raya Mayor Oking Jaya Atmaja No.9, Cibinong, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16911
                </h1>
                <h1 className="time-klinik mt-3">
                  <i className="fa-solid fa-clock"></i> 24 Jam
                </h1>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      {openWaktu && <DropDownWaktuTersedia />}
    </div>
  );
};

export default LayananDetailSmear2;
