import React from "react"
import Navbar from '../components/Navbar/Navbar.js'
import Container from '../components/Container/Container'
import ContactMe from "../components/ContentBar/ContactMe/ContactMe.js";



export default () => {

  return (
    <Container>
      <Navbar />
      <ContactMe />
    </Container>
  )

}
