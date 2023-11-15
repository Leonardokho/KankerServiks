// import React from 'react'

import Footer from "../footer/Footer"
import Header from "../header_landingpage/Header"
import IsiPage from "../isi_landingpage/IsiPage"
import NavbarHome from "../navbar/Navbar"
import './HeaderMain.css'

const HeaderMain = () => {
  return (
    <div>
        <NavbarHome/>
        <Header/>
        <IsiPage/>
        <Footer/>
    </div>
  )
}

export default HeaderMain