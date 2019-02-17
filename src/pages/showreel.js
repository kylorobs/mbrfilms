import React from "react"
import HeroVideo from '../components/HeroVideo/HeroVideo.js'
import Container from '../components/Container/Container'
import ContainerStyles from '../components/Container/ContainerStyles.module.css'
import Navbar from '../components/Navbar/Navbar.js'


export default () => (
  <Container className={ContainerStyles.container}>
    <Navbar />
    <HeroVideo loop='false' autoPlay ='false' id='199531134'/>
  </Container>
)
