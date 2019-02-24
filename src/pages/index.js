import React from "react"
import HeroVideo from '../components/HeroVideo/HeroVideo.js'
import Container from '../components/Container/Container'
import ContainerStyles from '../components/Container/ContainerStyles.module.css'
import Navbar from '../components/Navbar/Navbar.js'
import About1 from '../components/ContentBar/About1/About1'
import StripLinks from '../components/ContentBar/StripLinks/StripLinks'
import Footer from '../components/Footer/Footer'


export default () => (
  <Container className={ContainerStyles.container}>
    <Navbar />
    <HeroVideo loop='true' autoPlay = 'true' id='313563158'/>
    <About1 />
    <StripLinks />
    <Footer />
  </Container>
)
