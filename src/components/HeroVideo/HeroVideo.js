import React from 'react'
import HeroVideoStyles from "./HeroVideoStyles.module.css"
import Player from '@vimeo/player';

export default class HeroVideo extends React.Component{
  state = {
    iframe: null,
    screenWidth: null
  }


  componentDidMount(){

    const iframe = document.querySelector('iframe');

    const options = {
    id: 313563158,
    background: true,
    loop: true,
    autoplay: true
    };

    const player = new Player('hero', options);

    player.on('play', function() {
    console.log('played the video!');
    });

  }
render(){

let embed = this.state.iframe;

// embed = embedArray.pop();
// embed=embedArray.join('')

  return (
    // <div className={HeroVideoStyles.heroVideoContainer}>
      <div id="hero" className={HeroVideoStyles.heroVideoContainer}></div>
    // </div>
  )

}
}
