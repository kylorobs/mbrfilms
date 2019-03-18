import React from 'react'
import StripStyles from "./StripStyles.module.css"
import Hocs from '../hocs/hocs'


export default class Strip extends React.Component {

  //   state = {
  //     scrolling: false,
  //     ref: null
  //   }
  // 
  //   componentDidMount() {
  //    let navo = React.createRef();
  //    this.setState({ref: navo})
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
  //
  //
  //
  //   handleScroll = e => {
  //    if (this.state.scrolling == false) {
  //      window.requestAnimationFrame(function() {
  //        this.scrolling(e);
  //        this.setState({scrolling: false})
  //      });
  //    }
  //   this.setState({scrolling: true})
  //  }
  //
  //  scrolling = (e) => {
  //    if (this.isPartiallyVisible(this.state.navo)) {
  //      console.log("YAYYYYYYYYY")
  //   }
  //  }
  //
  // isPartiallyVisible =el =>{
  //    var elementBoundary = el.getBoundingClientRect();
  //    var top = elementBoundary.top;
  //    var bottom = elementBoundary.bottom;
  //    var height = elementBoundary.height;
  //
  //      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
  //  }

  render(){
  console.log("These are the props")
  console.log(this.props.direction)

    let classes = [StripStyles.strip]
    let stripText;
    let stripImage = this.props.image;


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
