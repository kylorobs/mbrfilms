import React from 'react'
import VideosStyles from "./VideosStyles.module.css";
import VideoContainer from './VideoContainer/VideoContainer.js'




export default class Videos extends React.Component{

  state = {
    videos: ['<iframe src="https://player.vimeo.com/video/313563158" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', '<iframe src="https://player.vimeo.com/video/315244339" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'],
  }

  // componentDidMount(){

    // let allVideos = [...this.props.album];
    // allVideos.map((video, i) => {
    //   let keyName = `vid${i}`
    //   return <VideoContainer id={video.node.id} direction='left' key={keyName}/>
    // })



    // this.setState({
    //   videos: allVideos
    // })

  // }

render(){
  console.log("and now the big moment");
  console.log(this.props.album)

  let allVideos = [...this.props.album];
  console.log("ALL VIDEOS");
  console.log(allVideos)
  let videoComponents = allVideos.map((video, i) => {
    let keyName = `vid${i}`
    return <VideoContainer id={video.node.iframe} direction='left' key={keyName}/>
  })

  console.log("and Now AllVIDEOS is")
  console.log(videoComponents)

  return (
    <div className={VideosStyles.container}>
      <div id="videos">
        {videoComponents}
      </div>
    </div>
  )
}
}
