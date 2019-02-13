import React from 'react'
import VideoContainerStyles from "./VideoContainerStyles.module.css";
import Player from '@vimeo/player';
// import Vimeo from 'react-vimeo'
import VimeoVideo from './VimeoVideo.js'

export default (props) => {

    // const options = {
    // id: null,
    // };
    //
    // let player = null;
    // options.id = props.id;
    //
    //   let newVid = document.createElement('div');
    //   newVid.classList.add('video-node')
    //   newVid.setAttribute('id', props.key)
    //   videos.appendChild(newVid)
    //
    //   player = new Player('EXPO', options);
    //  return player;
    //
    //
    // player.on('play', function() {
    // console.log('played the video!');
    // });
    //
    //
    //
    //   console.log("Let's see what is inside this video");
    //   console.log("video")
    // console.log(props.id)
    let iframe = props.id
  return (
    <div>
    <VimeoVideo iframe={iframe} />
    </div>
  )


}
