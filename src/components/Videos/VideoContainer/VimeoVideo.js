import React from 'react'
// import VideoContainerStyles from "./VideoContainerStyles.module.css";
// import Player from '@vimeo/player';
// import Vimeo from 'react-vimeo'

export default (props) => {

  return (
    <div dangerouslySetInnerHTML={{ __html: props.iframe}}>
    </div>
  )


}
