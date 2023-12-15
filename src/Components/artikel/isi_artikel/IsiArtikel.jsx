import { Button, Col, Container, Row, Card, Spinner } from 'react-bootstrap';
import image4 from '../../../assets/img/image 4.jpg';
import image1 from '../../../assets/img/image1.png';
import image3 from '../../../assets/img/image 3.png';
import image14 from '../../../assets/img/image 14.png';
import image11 from '../../../assets/img/image 11.png';
import image12 from '../../../assets/img/image 12.png';
import image13 from '../../../assets/img/image 13.png';
import image2 from '../../../assets/img/image 2.png';
import image5 from '../../../assets/img/image 5.png';
import image6 from '../../../assets/img/image 6.png';
import image7 from '../../../assets/img/image 7.png';
import image8 from '../../../assets/img/image 8.png';
import image9 from '../../../assets/img/image 9.png';
import image10 from '../../../assets/img/image 10.png';
import './IsiArtikel.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectAllArticles } from '../../../features/articles/articlesSlices';

const ArticleExcerpt = ({ article }) => {
  const linkArtikelDetail = useNavigate();
  return (
    <Col xs={12} md={4} className="mb-5 holder">
      <div style={{ width: '25rem', height: '23rem' }} className="shadow_card rounded-3">
        {article.img ? <img src={article.img} alt="gambar" className="image_artikel" /> : <img src={image2} alt="gambar" className="image_artikel" />}
        <Card.Body className="p-3">
          <h5 style={{ fontFamily: 'Montserrat' }}>{article.title}</h5>
          <Card.Link onClick={() => linkArtikelDetail('/Halaman_artikel_detail', { state: { articleId: article.id } })} className="d-flex justify-content-end mt-4 linkArtikel">
            Baca selengkapnya...
          </Card.Link>
        </Card.Body>
      </div>
    </Col>
  )
}

const IsiArtikel = () => {
  const dispatch = useDispatch()
  const articles = useSelector(selectAllArticles)
  const postStatus = useSelector(state => state.articles.status)
  const error = useSelector(state => state.articles.error)

  const artikel = [
    {
      id: '1',
      img: image1,
      desc: 'Apa itu kanker serviks?',
    },
    {
      id: '2',
      img: image3,
      desc: 'Apakah kanker serviks dapat dicegah?',
    },
    {
      id: '3',
      img: image14,
      desc: 'Kapan Sebaiknya Melakukan vaksin HPV?',
    },
    {
      id: '4',
      img: image5,
      desc: 'Apakah kanker serviks dapat disembuhkan?',
    },
    {
      id: '5',
      img: image6,
      desc: 'Metode-metode pengobatan yang bisa digunakan dalam menangani kanker serviks',
    },
    {
      id: '6',
      img: image7,
      desc: 'Faktor apa saja yang menyebabkan kanker serviks?',
    },
    {
      id: '7',
      img: image8,
      desc: 'Hal-hal yang bisa kita lakukan agar terhindar dari kanker serviks',
    },
    {
      id: '8',
      img: image9,
      desc: 'Pada usia berapa perempuan rentan terkena kanker serviks?',
    },
    {
      id: '9',
      img: image10,
      desc: 'Syarat penerima vaksinasi HPV',
    },
  ];

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchArticles())
    }
  }, [postStatus, dispatch, articles])

  let content;

  if (postStatus === 'loading') {
    content = <Spinner animation="border" variant="danger" />
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    content = articles.map((article, key) => (
      <ArticleExcerpt key={key} article={article} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <div>
      <div className="bg-boxs-2"></div>
      <Container>
        <br />
        <br />
        <Row className="isi_artikel_container">
          <Col md={6}>
            <img src={image4} alt="" />
          </Col>
          <Col md={6}>
            <div className="scrollbar container_artikel">
              <Row className="mb-4 shadow_artikel">
                <Col md={4}>
                  <img src={image2} alt="gambar" />
                </Col>
                <Col md={8} className="desc_artikel">
                  <h6>Apa kanker serviks bisa menular?</h6>
                  <div className="bg_topik">
                    <h6>Dampak Kanker</h6>
                  </div>
                </Col>
              </Row>
              <Row className="mb-4 shadow_artikel">
                <Col md={4}>
                  <img src={image11} alt="gambar" />
                </Col>
                <Col md={8} className="desc_artikel">
                  <h6>Berapa banyak perempuan di dunia yang mengidap penyakit kanker serviks?</h6>
                  <div className="bg_topik">
                    <h6>Statistik Kanker</h6>
                  </div>
                </Col>
              </Row>
              <Row className="mb-4 shadow_artikel">
                <Col md={4}>
                  <img src={image12} alt="gambar" />
                </Col>
                <Col md={8} className="desc_artikel">
                  <h6>Kapan penyakit kanker serviks dapat diidentifikasi?</h6>
                  <div className="bg_topik">
                    <h6>Identifikasi Kanker</h6>
                  </div>
                </Col>
              </Row>
              <Row className="mb-4 shadow_artikel">
                <Col md={4}>
                  <img src={image13} alt="gambar" />
                </Col>
                <Col md={8} className="desc_artikel">
                  <h6>Dampak kanker serviks pada perempuan</h6>
                  <div className="bg_topik">
                    <h6>Dampak Kanker</h6>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="my-5">
          <div className="d-flex justify-content-center">
            <Col>
              <h4 className="title-deskripsi">100++ ARTIKEL PENCEGAHAN</h4>
              <h4 className="title-deskripsi">KANKER SERVIKS</h4>
            </Col>
          </div>
        </Row>
        <Row className="artikel_terbaru">
          {content}
        </Row>
        <Col className="card-ceritakan mb-5">
          <Button className="button_artikel_banyak mt-3 mb-4"> Lebih Banyak</Button>
        </Col>
      </Container>
    </div>
  );
};

export default IsiArtikel;
