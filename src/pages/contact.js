import React from "react"
import Navbar from '../components/Navbar/Navbar.js'
import Container from '../components/Container/Container'
import ContactMe from "../components/ContentBar/ContactMe/ContactMe.js";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { instagram } from '@fortawesome/free-solid-svg-icons'


export default () => {

  // library.add({instagram})
  return (
    <Container>
      <Navbar />
      <ContactMe />
    </Container>
  )

}
