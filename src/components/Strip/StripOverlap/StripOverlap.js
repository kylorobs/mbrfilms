import React from 'react'
import StripOverlapStyles from "./StripOverlapStyles.module.css";


export default (props) => {
let classes = [StripOverlapStyles.overlap]

props.direction === 'left' ? classes.push(StripOverlapStyles.left) : classes.push(StripOverlapStyles.right);

classes = classes.join(' ')

    let children;
    if (props.children) children = props.children;

return (  <div className={classes}>
    {children}
  </div>
)}
