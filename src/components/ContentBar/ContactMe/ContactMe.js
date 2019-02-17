import React from 'react'
import Strip from "../../Strip/Strip";
import StripOverlap from "../../Strip/StripOverlap/StripOverlap";
import ContactMeStyles from "./ContactMeStyles.module.css";
import profilePic from '../../../images/Pro-pic.jpg';


export default () => (
  <div className={ContactMeStyles.stripGrid}>
    <Strip direction='right'>
      <h3> You can reach me on email, cellphone or social media </h3>
      <p>email: <a href="mailto:matt@mbrfilms.com"> matt@mbrfilms.com </a> </p>
      <p> Follow me on Instagram: </p>

    </Strip>
    <StripOverlap direction='left'>
      <img src={profilePic}></img>
    </StripOverlap>


  </div>
)
