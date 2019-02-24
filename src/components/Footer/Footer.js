import React from 'react'
import FooterStyles from "./FooterStyle.module.css";


export default (props) => (
  <footer>
    <div className={FooterStyles.container}>
      <hr></hr>
      <div className={FooterStyles.footer}>
        <p className={FooterStyles.madeby}> made by Kylo Robs </p>
        <p className={FooterStyles.email}>Contact me at <a href="mailto:matt@mbrfilms.com"> matt@mbrfilms.com </a></p>
      </div>
    </div>
  </footer>
)
