import React from 'react'
import Strip from "../../Strip/Strip";
import StripOverlap from "../../Strip/StripOverlap/StripOverlap";
import ContactMeStyles from "../ContactMe/ContactMeStyles.module.css";
import sunset from '../../../images/sunsetBW.jpg';
import Hocs from '../../hocs/hocs'


export default () => (
  <Hocs>
  <div className={ContactMeStyles.stripGrid}>
    <Strip image='true' direction='left'><h3>A bit of background on me...</h3></Strip>
    <StripOverlap direction='right'>
      <img src={sunset}></img>
    </StripOverlap>
  </div>
    <div className={ContactMeStyles.textCanvas}>
      <p>For the most part, MBR films is a one-man band. As an independent filmmaker with a background in
a variety of fields, I am able to operate entirely on my own, from the initial stages of conceptualizing
and scriptwriting, all the way through to filming and editing together the final product.</p>

    <p>Having previously studied Politics, Philosophy and Economics (BCom PPE) at the University of Cape
Town, I later turned my attention to film where I trained as a director at City Varsity Cape Town.
After working with different production companies, I soon developed a strong desire to find my own
platform and create engaging visual stories that harness the exciting power of the medium.</p>

    <p>Whether it’s an interview-style documentary, corporate video, promotional/brand video, or simply
  ‘fly on the wall’ event coverage, there is always a story to tell. Identifying that story, crafting it
  through the lens, and making it accessible to a wider audience is the fundamental aspect of my
  work.</p>

  <p>Feel free to contact me if you have any aspirations for a video, even if you’d simply like to have a
  chat and brainstorm a bit.</p>

  <p> Let’s tell a story together. </p>
  </div>
  </Hocs>
)
