import React from "react"
import Navbar from '../components/Navbar/Navbar.js'
import Container from '../components/Container/Container'
import AboutMe from '../components/ContentBar/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'

export default () => (
  <Container>
    <Navbar />
    <AboutMe />
    <Footer />
  </Container>
)
