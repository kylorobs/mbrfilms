import React from 'react'
import FooterStyles from "./FooterStyle.module.css";


export default (props) => (
  <footer>
    <div className={FooterStyles.container}>
    <hr></hr>
    <p className={FooterStyles.madeby}> made by Kylo Robs </p>
    </div>
  </footer>
)
