import React from 'react'
import NavbarHeaderIsiArtikelDetail from '../header_navbar_isiartikel/NavbarHeaderIsiArtikelDetail'
import Footer from '../../landing_page/footer/Footer'
import ArtikelIsiDetail from '../artikel_isi_detail/ArtikelIsiDetail'

const IsiArtikelDetailMain = () => {
  return (
    <div>
        <NavbarHeaderIsiArtikelDetail/>
        <ArtikelIsiDetail/>
        <Footer/>
    </div>
  )
}

export default IsiArtikelDetailMain