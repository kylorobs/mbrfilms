import React from "react"
import Container from '../components/Container/Container'
import ContainerStyles from '../components/Container/ContainerStyles.module.css'
import Navbar from '../components/Navbar/Navbar.js'
import VimeoVideo from '../components/Videos/VideoContainer/VimeoVideo.js'
import Strip from '../components/Strip/Strip'
import StripOverlap from '../components/Strip/StripOverlap/StripOverlap'
import ContactMeStyles from '../components/ContentBar/ContactMe/ContactMeStyles.module.css'
import road from '../images/road.jpg';
import Button from "../components/Button/Button.js";

export default () => {
  let iframe = `<iframe src="https://player.vimeo.com/video/316107296" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`
return  (
    <Container className={ContainerStyles.container}>
      <Navbar />
      <VimeoVideo iframe={iframe} />
      <div className={ContactMeStyles.stripGrid}>
        <Strip image='true' direction='left'>
          <Button to='/portfolio' > See portfolio </Button>
        </Strip>
        <StripOverlap direction='right'>
          <img src={road}></img>
        </StripOverlap>
      </div>
    </Container>
  )
}
