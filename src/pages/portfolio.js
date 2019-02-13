import React from "react"
import { Link, graphql } from 'gatsby'
import Container from '../components/Container/Container'
import Navbar from '../components/Navbar/Navbar.js'
import Videos from '../components/Videos/Videos.js'

export default ( { data }) => {
  console.log("data time")
  console.log(data)
  // console.log(props)
  return (
  <Container>
    <Navbar />
    <Videos album={data.allVimeoVideo.edges} />
  </Container>

)}


export const query = graphql`
 {
  allVimeoVideo {
    edges {
      node {
        id
        title
        iframe
      }
    }
  }
}
`
