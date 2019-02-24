import React from 'react'
import StripStyles from "./StripStyles.module.css"
import Hocs from '../hocs/hocs'


export default class Strip extends React.Component {

  render(){
  console.log("These are the props")
  console.log(this.props.direction)

    let classes = [StripStyles.strip]
    let stripText;
    let direction = this.props.direction;
    let stripImage = this.props.image;

    let consoleThis = function(){
      console.log("I AM CONSOLING YOU")
    }

    if (stripImage === 'false'){
      stripText = StripStyles.stripButtons;
    }

    else {
      this.props.direction === 'left' ? stripText = StripStyles.stripTextLeft : stripText = StripStyles.stripTextRight;
    }

    this.props.direction === 'left' ? classes.push(StripStyles.stripLeft) : classes.push(StripStyles.stripRight);
    classes = classes.join(' ')

    return (
      <Hocs>
        <div className={classes} onScroll={() => {console.log("hEEEEEY")}}></div>
        <div className={stripText}>
          { this.props.children }
        </div>
      </Hocs>
    )
  }

}
