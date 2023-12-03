import { Col, Row, Container, Button } from 'react-bootstrap';
import artikelImgTiga from '../../../assets/img/close-up-hand-with-food-container 1.png';
import './ArtikelIsiDetail.css';

const ArtikelIsiDetail = () => {
  return (
    <div className="bg_isi_artikeldetail">
      <Container>
        <Row>
          <Col md={2}>
            <h1 className="title-left-isi">Home Article</h1>
          </Col>
          <Col md={8}>
            <h1 className="title-tengah-isi mb-5">Vaksin HPV Bisa Cegah Kanker Serviks Penyebab Kematian Tertinggi Ketiga Wanita Indonesia</h1>
            <div className="scroll-isi-artikeldetail">
              <h1 className="desc-tengah-isi">
                Kanker serviks menjadi salah satu penyebab kematian tertinggi pada wanita di dunia. Sementara data GLOBOCAN mencatat kanker serviks adalah penyebab kematian tertinggi ketiga pada wanita Indonesia setelah kanker payudara dan
                kanker paru.
                <br />
                <br />
                Dokter spesialis kulit dan kelamin dari Departemen Dermatologi dan Venerologi FKKMK UGM, dr. Satiti Retno Pudjiati, Sp.KK (K)., menjelaksan kanker serviks atau leher rahim merupakan kanker ganas yang bisa dicegah sejak dini,
                salah satunya dengan melakukan vaksin Human Papillomavirus Vaccine (HPV).
                <br />
                <br />
                “Vaksinasi HPV bisa mencegah kanker serviks dan dianjurkan sedini mungkin. Vaksin ini bisa diberikan mulai umur 9-49 tahun,”tuturnya dalam Talkshow Kesehatan berjudul Kesehatan Organ Kewanitaan yang diselenggarakan klinik
                Gadjah Mada Medical Center (GMC), Sabtu (11/2) di ruang aula GMC.
                <br />
                <br />
                Satiti mengatakan pemberian vaksin HPV akan efektif jika dilakukan sejak dini mulai usia 9 tahun. Sebab, di usia tersebut sebagian besar belum aktif secara seksual.
                <br />
                <br />
                Saat ini tiga jenis vaksin HPV yang telah mendapat izin U.S. Food and Drug Administration (FDA). Pertama vaksin HPV Cervarix yang melindungi dari HPV tipe 16 dan 18. Kedua, vaksin HPV Gardasil yang memberikan perlindungan
                terhadap HPV tipe 6, 11, 16, dan 18. Ketiga, vaksin HPV 9-valent (Gardasil 9) yang bisa melindungi dari HPV tipe 6, 11, 16, 18, 31, 33, 45, 52, dan 58.
                <br />
                <br />
                “Sebenarnya ada 200 tipe virus HPV namun dari data epidemiologi yang banyak menginveksi adalah 9 tipe tadi. Sementara tipe lainnya tidak lebih berbahaya,”paparnya.
                <br />
                <br />
                Satiti menyampaikan sejumlah faktor risiko terjadinya kanker serviks. Beberapa diantaranya melakukan aktivitas seksual di usia muda, dengan multipartner, partner berisiko tinggi, dan partner memiliki penyakit infeksi menular
                seksual.
                <br />
                <br />
                “Kanker serviks terjadi 90% karena virus HPV melalui kontak kulit yang mengandung virus HPV,” ucapnya. Individu yang telah aktif secara seksual dikatakan Satiti berisiko terkena kanker serviks. Oleh sebab itu, upaya deteksi
                dini penting dilakukan melalui tes IVA dan papsmear secara rutin. Selain itu, juga menjaga gaya hidup sehat, vaksin HPV, menjaga kebersihan genital, serta tidak berganti-ganti pasangan seksual.
                <br />
                <br />
                Talkshow kesehatan ini merupakan salah satu rangkaian acara yang digelar dalam memeriahkan HUT ke-22 GMC. Rangkaian acara lainnya yang turut dilaksanakan pada hari yang sama adalah pemeriksaan IVA dan papsmear gratis bagi
                sivitas UGM dan masyarakat umum serta konsultasi dan pemeriksaan seputar kewanitaan.
              </h1>
            </div>
            <Row className="mt-5">
              <Col className="flex-info">
                <i className="fa-solid fa-circle-info fa-2xl icon-info"></i>
                <h1 className="desc-info">Share artikel ini untuk membantu masyarakat supaya terhindar dari penyakit kanker serviks dan berusaha untuk melakukan pencegahan sejak dini</h1>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="icon-media">
                <i className="fa-solid fa-share-nodes share-artikel fa-2xl"></i>
                <i className="fa-brands fa-whatsapp wa-artikel fa-2xl"></i>
                <i className="fa-brands fa-facebook fb-artikel fa-2xl"></i>
                <i className="fa-brands fa-twitter twt-artikel fa-2xl"></i>
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <div>
              <h1 className="title-right-isi mb-5">Publish teratas</h1>
              <div className="container_publish">
                <img src={artikelImgTiga} alt="gambar" className="image_publish" />
                <div>
                  <h1 className="title-publish">Tips Menjaga Pola Makan Walaupun Sibuk Bekerja</h1>
                </div>
                <Button className="button_publish">Selengkapnya</Button>
              </div>
            </div>
            <div>
              <div className="container_publish">
                <img src={artikelImgTiga} alt="gambar" className="image_publish" />
                <div>
                  <h1 className="title-publish">Tips Menjaga Pola Makan Walaupun Sibuk Bekerja</h1>
                </div>
                <Button className="button_publish">Selengkapnya</Button>
              </div>
            </div>
            <div>
              <div className="container_publish">
                <img src={artikelImgTiga} alt="gambar" className="image_publish" />
                <div>
                  <h1 className="title-publish">Tips Menjaga Pola Makan Walaupun Sibuk Bekerja</h1>
                </div>
                <Button className="button_publish">Selengkapnya</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArtikelIsiDetail;
