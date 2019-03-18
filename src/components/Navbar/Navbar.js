import React from 'react'
import { Link } from 'gatsby'
import MenuLinks from './MenuLinks/MenuLinks.js'
import Burger from './Burger/Burger.js'
import NavbarStyles from "./NavbarStyles.module.css"
import logo from './logo.png'

class Navbar extends React.Component{

  state = {
    'activeMenu': false
  }

  toggleActiveMenu = () => {
    this.state.activeMenu ? this.setState({'activeMenu': false}) : this.setState({'activeMenu': true});
  }

  render(){

    let burgerClass= [NavbarStyles.burgerLinks]
    if (this.state.activeMenu){
      burgerClass.push(NavbarStyles.activeBurger);
      console.log("Before join")
      console.log(burgerClass)
    }
    console.log("BURGER CLASS")
    console.log(burgerClass)
    burgerClass = burgerClass.join(' ')


 return   (
   <div className={NavbarStyles.container}>
     <div className={NavbarStyles.logoContainer}>
     <Link to="/"><img alt="mbrfilms logo" src={logo} /></Link>
     </div>
     <MenuLinks class={NavbarStyles.linksContainer} />
     <MenuLinks class={burgerClass} />
     <Burger onClick={this.toggleActiveMenu} />
   </div>
    )
  }
}

  export default Navbar
