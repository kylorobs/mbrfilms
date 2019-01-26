import React from 'react'
import HeroVideoStyles from "./HeroVideoStyles.module.css"
import HeroVideoFile from './HeroVideo.mp4'

export default () => {

  return (
    <div className={HeroVideoStyles.heroContainer}>
      <video loop autoPlay className={HeroVideoStyles.heroVideo}>
        <source src={HeroVideoFile} type="video/mp4"></source>
      </video>
    </div>
  )

}
