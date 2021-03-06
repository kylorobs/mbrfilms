import React from 'react'
import VideoContainerStyles from "./VideoContainerStyles.module.css";
import VimeoVideo from './VimeoVideo.js'

export default (props) => {

  let iframe = props.id;


  console.log("Strip Direction PROPS")
  console.log(props.stripDirection)

  let videoDirection;
  let stripStyles = [VideoContainerStyles.strip];
  let videoFlex = [VideoContainerStyles.flex]

  switch (props.stripDirection){
    case 'left' :
      stripStyles.push(VideoContainerStyles.stripLeft)
      stripStyles.push(VideoContainerStyles.contentLeft)
      videoFlex.push(VideoContainerStyles.contentRight)
    break;
    case 'right' :
      stripStyles.push(VideoContainerStyles.stripRight)
      stripStyles.push(VideoContainerStyles.contentRight)
      videoFlex.push(VideoContainerStyles.contentLeft)
    break;
    default: console.log("switch error")
  }

  stripStyles = stripStyles.join(' ');
  videoFlex = videoFlex.join(' ');

  console.log("STRIP STYLESSSS");
  console.log(stripStyles)
  return (
    <div className = {VideoContainerStyles.content}>
      <div className = {videoFlex}>
        <div className = {VideoContainerStyles.container} >
          <VimeoVideo iframe={iframe} />
        </div>
      </div>
    <div className={stripStyles}>
      <h3> {props.title} </h3>
    </div>
    </div>
  )


}
