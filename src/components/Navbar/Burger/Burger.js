import React from 'react'
import { Link } from 'gatsby';
import MenuLinks from '../MenuLinks/MenuLinks.js';
import NavbarStyles from "../NavbarStyles.module.css"

const Burger = (props) => {

  function clickHandler(e){
    props.onClick();
  }

 return (
      <div onClick={clickHandler} className={NavbarStyles.burgerContainer}>
        <div className= {NavbarStyles.burgerTop}></div>
        <div className= {NavbarStyles.burgerMiddle}></div>
        <div className= {NavbarStyles.burgerBottom}></div>
      </div>
    )

  }

  export default Burger
