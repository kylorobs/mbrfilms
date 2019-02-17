import React from 'react'
import ButtonStyles from "./ButtonStyle.module.css";


export default (props) => (
  <div className={ButtonStyles.buttonContainer}>
    <a className={ButtonStyles.button} href={props.to}> {props.children}</a>
  </div>
)
