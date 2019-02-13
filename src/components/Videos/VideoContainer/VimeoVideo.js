import React from 'react'
import VideoContainerStyles from "./VideoContainerStyles.module.css";
// import Player from '@vimeo/player';
// import Vimeo from 'react-vimeo'

export default (props) => {

  return (
    <div className ={VideoContainerStyles.videoWrapper} dangerouslySetInnerHTML={{ __html: props.iframe}}></div>
  )


}
