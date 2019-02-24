import React from 'react'
import ContentBarStyles from "./ContentBarStyles.module.css"
import profilePic from '../../images/Pro-pic.jpg';

export default ({ children }) => (
  <div>
  <div className={ContentBarStyles.grid}>{ children }</div>
  </div>
)
