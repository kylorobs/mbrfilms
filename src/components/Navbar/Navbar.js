import React from 'react'
import { Link } from 'gatsby'
import NavbarStyles from "./NavbarStyles.module.css"
import logo from './logo.png'

const Navbar = () => {

 return   (
   <div className={NavbarStyles.container}>
     <div className={NavbarStyles.logoContainer}>
      <img src={logo} />
     </div>
      <div className={NavbarStyles.linksContainer}>
        <ul>
          <li> <Link
            to="/portfolio/"
            activeStyle={{
              color: "red",
            }}
          > Portfolio
          </Link>
          </li>
          <li>
            <Link
            to="/contact/"
            activeStyle={{
              color: "red",
            }}> Contact
            </Link>
          </li>
        </ul>
     </div>
   </div>
    )

  }

  export default Navbar
