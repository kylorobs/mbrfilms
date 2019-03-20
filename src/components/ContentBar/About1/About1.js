import React from 'react'
import ContentBar from "../ContentBar";
import Strip from "../../Strip/Strip";
import ContentBarStyles from "../ContentBarStyles.module.css";
import profilePic from '../../../images/Pro-pic.jpg';
import lighthouse from '../../../images/lighthouse.jpg';
import faces from '../../../images/faces.jpg';
import interview1 from '../../../images/int1.jpg';
import brushes from '../../../images/brushes.jpg';
import landscape from '../../../images/landscape.jpg';
import painting from '../../../images/painting.jpg';
import sunset2 from '../../../images/sunset2.jpg';
import huts from '../../../images/huts.jpg';
import flower from '../../../images/flower.jpg';
import profile3 from '../../../images/profile3.jpg';
import drawing from '../../../images/drawing.jpg';
import smile from '../../../images/smile.jpg';

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
        <img alt="Matthew Robinson filmaker profile" src={profilePic} />
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
      <div className= {ContentBarStyles.imagesFlex1}>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="student faces" src={faces}></img>
        </div>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="A lighthouse" src={lighthouse}></img>
        </div>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="An interview profile shot" src={interview1}></img>
        </div>
      </div>

      <div className= {ContentBarStyles.imagesFlex2}>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="Brushes filmed in the Tanya Bonello documenatry" src={brushes}></img>
        </div>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="children painting" src={painting}></img>
        </div>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="Eastern Cape landscape" src={landscape}></img>
        </div>
      </div>

      <div className= {ContentBarStyles.imagesFlex3}>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="Beach huts" src={huts}></img>
        </div>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="Eastern Cape flower" src={flower}></img>
        </div>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="Eastern Cape sunset" src={sunset2}></img>
        </div>
      </div>

      <div className= {ContentBarStyles.imagesFlex4}>
      <div className= {ContentBarStyles.imageContainer}>
        <img alt="Profile image" src={profile3}></img>
      </div>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="Drawing" src={drawing}></img>
        </div>
        <div className= {ContentBarStyles.imageContainer}>
          <img alt="Man smiles" src={smile}></img>
        </div>
      </div>

    </ContentBar>
  )


}
