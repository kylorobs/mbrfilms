import React from 'react'
import Strip from "../../Strip/Strip";
import StripOverlap from "../../Strip/StripOverlap/StripOverlap";
import ContactMeStyles from "../../ContentBar/ContactMe/ContactMeStyles.module.css";
import VimeoVideo from './VimeoVideo.js'



export default (props) => {

  let stripD = props.stripDirection;
  let stripO;

  if (stripD === 'left') stripO = 'right';
  else if (stripD === 'right') stripO = 'left';

  return (

  <div className={ContactMeStyles.videoGrid}>
    <Strip direction={stripD}>
    <h3>{props.title}</h3>
    <h4 className={ContactMeStyles.videoDescription}> {props.description}</h4>
    </Strip>
    <StripOverlap direction={stripO}>
        <VimeoVideo iframe={props.id} />
    </StripOverlap>
  </div>

)
}
