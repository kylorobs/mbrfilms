import React from 'react'
import HeroVideoStyles from "./HeroVideoStyles.module.css"
import HeroVideo from './HeroVideo.mp4'

export default class HeroVideo extends React.Component{
  state = {
    iframe: null,
    screenWidth: null
  }


  componentDidMount(){

    // let container = document.querySelectorAll('.heroVideo')[0];
    let url=`https://vimeo.com/api/oembed.json?url=https://vimeo.com/100237575&api=false&loop=true&portrait=false&title=false&autoplay=true&byline=false`
    fetch(url).then(res=> res.json()).then(results => {
      let res = results.html;
      console.log(res)
      this.setState({iframe: res})
    }).catch(err => console.log("Error fetching" + err))

  }
render(){



  return (
    <div className={HeroVideoStyles.heroContainer}>
      <video autoplay muted loop id="heroVideo"<
        <source src={HeroVideo}>
      </video>
    </div>
  )

}
}
