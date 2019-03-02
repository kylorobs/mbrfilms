import React from 'react'
import ContentBarStyles from "./ContentBarStyles.module.css"


export default ({ children }) => (
  <div>
  <div className={ContentBarStyles.grid}>{ children }</div>
  </div>
)
