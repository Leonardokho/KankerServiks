import NavbarHeaderIsiArtikelDetail from '../header_navbar_isiartikel/NavbarHeaderIsiArtikelDetail'
import Footer from '../../landing_page/footer/Footer'
import ArtikelIsiDetail from '../artikel_isi_detail/ArtikelIsiDetail'
import { selectArticleById } from '../../../features/articles/articlesSlice';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const IsiArtikelDetailMain = () => {
  const location = useLocation();

  let articleId = location.state.articleId;
  const article = useSelector(state => selectArticleById(state, articleId))

  return (
    <div>
        <NavbarHeaderIsiArtikelDetail title={article.title}/>
        <ArtikelIsiDetail article={article}/>
        <Footer/>
    </div>
  )
}

export default IsiArtikelDetailMain