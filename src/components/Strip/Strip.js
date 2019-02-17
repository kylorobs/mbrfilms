import React from 'react'
import StripStyles from "./StripStyles.module.css";
import Hocs from '../hocs/hocs'


export default (props) => {
console.log("These are the props")
console.log(props.direction)

  let classes = [StripStyles.strip]
  let stripText;
  let direction = props.direction;
  let stripImage = props.image;

  if (stripImage === 'false'){
    stripText = StripStyles.stripButtons ;
  }

  else {
    props.direction === 'left' ? stripText = StripStyles.stripTextLeft : stripText = StripStyles.stripTextRight;
  }

  props.direction === 'left' ? classes.push(StripStyles.stripLeft) : classes.push(StripStyles.stripRight);


  classes = classes.join(' ')
  return (
    <Hocs>
    <div className={classes}></div>
    <div className={stripText}>
      { props.children }
    </div>
    </Hocs>
  )


}
