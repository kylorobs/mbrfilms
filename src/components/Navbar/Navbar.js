import React from 'react'
import { Link } from 'gatsby'
import NavbarStyles from "./NavbarStyles.module.css"
import logo from './logo.png'

const Navbar = () => {

 return   (
   <div className={NavbarStyles.container}>
     <div className={NavbarStyles.logoContainer}>
     <Link to="/"><img alt="mbrfilms logo" src={logo} /></Link>
     </div>
      <div className={NavbarStyles.linksContainer}>
        <ul>
        <li> <Link
          to="/showreel/"
          activeStyle={{
            color: "red",
          }}
        > SHOWREEL
        </Link>
        </li>
          <li> <Link
            to="/portfolio/"
            activeStyle={{
              color: "red",
            }}
          > PORTFOLIO
          </Link>
          </li>
          <li>
          <Link
          to="/about/"
          activeStyle={{
            color: "red",
          }}> ABOUT
          </Link>
          </li>
          <li>
            <Link
            to="/contact/"
            activeStyle={{
              color: "red",
            }}> CONTACT
            </Link>
          </li>
        </ul>
     </div>
   </div>
    )

  }

  export default Navbar
