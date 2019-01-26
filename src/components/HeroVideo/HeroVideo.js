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
    id: 100237575,
    background: true,
    loop: true
    };

    const player = new Player('hero', options);

    player.on('play', function() {
    console.log('played the video!');
    });

    // let container = document.querySelectorAll('.heroVideo')[0];
    let url=`https://vimeo.com/api/oembed.json?url=https://vimeo.com/100237575&api=false&loop=true&portrait=false&title=false&autoplay=true&byline=false`
    fetch(url).then(res=> res.json()).then(results => {
      let res = results.html;
      console.log(res)
      this.setState({iframe: res})
    }).catch(err => console.log("Error fetching" + err))

  }
render(){

let embed = this.state.iframe;

// embed = embedArray.pop();
// embed=embedArray.join('')

  return (
    // <div className={HeroVideoStyles.heroVideoContainer}>
      <div
        className={HeroVideoStyles.heroVideoContainer}
        dangerouslySetInnerHTML={{__html: embed}}>
      </div>
    // </div>
  )

}
}
