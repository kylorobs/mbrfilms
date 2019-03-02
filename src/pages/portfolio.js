import React from "react"
import { graphql } from 'gatsby'
import Container from '../components/Container/Container'
import Navbar from '../components/Navbar/Navbar.js'
import Videos from '../components/Videos/Videos.js'
import Footer from '../components/Footer/Footer'

export default ( { data }) => {
  console.log("data time")
  console.log(data)
  // console.log(props)

  let allVideos = data.allVimeoVideo.edges;
  let no1 = allVideos.find(el => el.node.id === "305688968")
  let no2 = allVideos.find(el => el.node.id === "283012239" )
  let no4 = allVideos.find(el => el.node.id === "286317651")
  let no3 = allVideos.find(el => el.node.id === "315244339")


  no1.node.description = "A short documentary that encapsulates the artistic approach of Tanya Bonello, a mixed media artist."
  no2.node.description = "Personal testimonies of the impact The Justice Desk has had on the people of Zambia, as they fight for the protection of human rights."
  no4.node.description = "A craft brewer sets out to raise funds for his new business venture - a distillery in the Eastern Cape that produces a proudly South African tequila product."
  no3.node.description = "A campaign to promote the universal right to education, using a poem performed by a group of Zambian students."
  // let no5 = allVideos.find(el => el.node.id === )
  let album = [no1, no2, no3, no4];

  return (
  <Container>
    <Navbar />
    <Videos album={album} />
    <Footer />
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
