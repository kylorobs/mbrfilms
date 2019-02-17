import React from 'react'
import HeroVideoStyles from "./HeroVideoStyles.module.css"
import Player from '@vimeo/player';

export default class HeroVideo extends React.Component{
  componentDidMount(){


    const options = {
    id: this.props.id,
    background: true,
    loop: false,
    autoplay: false
    };

    if (this.props.autoPlay === 'true'){
      options.autoplay = true;
    }

    if (this.props.loop === 'true') options.loop = true;

    const player = new Player('hero', options);

    player.on('play', function() {
    console.log('played the video!');
    });

  }
render(){



  return (
      <div id="hero" className={HeroVideoStyles.heroVideoContainer}></div>
  )

}
}
