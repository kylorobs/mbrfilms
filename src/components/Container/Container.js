import React from 'react'
import ContainerStyles from "./ContainerStyles.module.css"

export default ({children}) => (
  <div className={ContainerStyles.container}>{children}</div>
)
