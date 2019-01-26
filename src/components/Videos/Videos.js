import React from 'react'
import VideosStyles from "./VideosStyles.module.css"

export default class Videos extends React.Component{
  state = {
    videos: [],
    screenWidth: null
  }


  componentDidMount(){

    // let container = document.querySelectorAll('.heroVideo')[0];
    let url=`https://vimeo.com/api/oembed.json?url=https://vimeo.com/100237575&api=false&loop=true&portrait=false&title=false&autoplay=true&byline=false`
    fetch(url).then(res=> res.json()).then(results => {

      results.map((video, i) => {
        embed= video.html;
        updatedVideos = [...this.state.videos];
        updatedVideos.push(embed);
        this.setState({videos: updatedVideos})
      })

    }).catch(err => console.log("Error fetching" + err))

  }

render(){

let embeds = this.state.videos;

// embed = embedArray.pop();
// embed=embedArray.join('')

  return (
    <div className={VideosStyles.container}>
      <div
        className={VideosStyles.videos}
        dangerouslySetInnerHTML={{__html: embed}}>
      </div>
    </div>
  )

}
}
