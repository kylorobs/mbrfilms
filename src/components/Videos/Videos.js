import React from 'react'
import VideosStyles from "./VideosStyles.module.css";
// import VideoContainer from './VideoContainer/VideoContainer.js'
import VidContainer from './VideoContainer/VidContainer.js'




export default class Videos extends React.Component{

render(){
  console.log("and now the big moment");
  console.log(this.props.album)

  let allVideos = [...this.props.album];
  console.log("ALL VIDEOS");
  console.log(allVideos)

  let stripDirection = 'left';

  let videoComponents = allVideos.map((video, i) => {
    let keyName = `vid${i}`
    if (stripDirection === 'left') stripDirection = 'right';
    else stripDirection = 'left'

    return <VidContainer id={video.node.iframe} title={video.node.title} stripDirection={stripDirection} key={keyName}/>
  })

  console.log("and Now AllVIDEOS is")
  console.log(videoComponents)

  return (
    <div className={VideosStyles.container}>
      <div className={VideosStyles.canvas}>
        {videoComponents}
      </div>
    </div>
  )
}
}
