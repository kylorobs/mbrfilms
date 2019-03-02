import React from 'react'
import Strip from "../../Strip/Strip";
import StripOverlap from "../../Strip/StripOverlap/StripOverlap";
import ContactMeStyles from "./ContactMeStyles.module.css";
import profilePic from '../../../images/profS.jpg';
import camPic from '../../../images/camS.jpg';
import light from '../../../images/light.jpg';
import Hocs from '../../hocs/hocs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'


export default () => (
  <Hocs>
    <div className={ContactMeStyles.stripGrid}>
      <Strip direction='right'>
        <h3> Reach me by email </h3>
        <div className={ContactMeStyles.icons}>
          <div className={ContactMeStyles.icons}>
            <FontAwesomeIcon size="4x" icon={faEnvelope} color='red'/>
            <a className={ContactMeStyles.iconLink} href="mailto:matt@mbrfilms.com"> matt@mbrfilms.com </a>
          </div>
        </div>
      </Strip>
      <StripOverlap direction='left'>
        <img alt="Matthew Robinson profile" src={profilePic}></img>
      </StripOverlap>
    </div>
    <div className={ContactMeStyles.stripGrid}>
      <Strip direction='left'>
        <h3> Follow me on Instagram </h3>
        <div className={ContactMeStyles.icons}>
          <div className={ContactMeStyles.icons}>
            <FontAwesomeIcon size="4x" icon={faCoffee} color='red'/>
            <a className={ContactMeStyles.iconLink} href="mailto:matt@mbrfilms.com"> @matt.robinson10</a>
          </div>
        </div>
      </Strip>
      <StripOverlap direction='right'>
        <img alt="Matthew Robinson film equipment" src={camPic}></img>
      </StripOverlap>
    </div>
    <div className={ContactMeStyles.stripGrid}>
      <Strip direction='right'>
        <h3> Watch all my productions on Vimeo </h3>
        <div className={ContactMeStyles.icons}>
          <div className={ContactMeStyles.icons}>
            <FontAwesomeIcon size="4x" icon={faVideo} color='red'/>
            <a className={ContactMeStyles.iconLink} href="https://vimeo.com/user46445224"> Matthew Robinson </a>
          </div>
        </div>
      </Strip>
      <StripOverlap direction='left'>
        <img alt="beautiful light" src={light}></img>
      </StripOverlap>
    </div>

  </Hocs>
)
