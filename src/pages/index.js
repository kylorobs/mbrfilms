import React from "react"
// import { Link, graphql } from 'gatsby'
import HeroVideo from '../components/HeroVideo/HeroVideo.js'
import Container from '../components/Container/Container'
import Navbar from '../components/Navbar/Navbar.js'
import Videos from '../components/Videos/Videos'

export default () => (
  <Container>
    <Navbar />
    <HeroVideo />
    <h1> Matt Robinson Film</h1>
    <Videos />
    <h1> More Space </h1>
  </Container>


)
