import React from 'react'
import ContentBar from "../ContentBar";
import Strip from "../../Strip/Strip";
import ContentBarStyles from "../ContentBarStyles.module.css";
import profilePic from '../../../images/Pro-pic.jpg';

export default (props) => {


  return (
    <ContentBar>
      <Strip image='true' direction='left' />
      <div className={ContentBarStyles.stripText}>
        <h3> Welcome to MbR Films  </h3>
        <p> Based in Cape Town, MBR films specializes in small footprint video production that nurtures stories
          and catapults content to a wider audience.</p>
      </div>
      <div className={ContentBarStyles.stripImage}>
        <img src={profilePic} />
      </div>
      <div className={ContentBarStyles.panelImage}>
      </div>
      <div className={ContentBarStyles.panelContent}>

      </div>
      <div className={ContentBarStyles.borderContent}>
        <div className = {ContentBarStyles.borderContentBox}>
            <p>With an appreciation for the power of personal testimony in storytelling, coupled with a
            careful eye looking through the lens for faithful observation, a mere concept can be translated onto
            screen in a manner that both captivates and speaks truthfully.</p>
        </div>
      </div>
    </ContentBar>
  )


}
