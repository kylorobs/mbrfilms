import React from 'react'
import { Link } from 'gatsby'

const MenuLinks = (props) => {

 return   (
      <div className={props.class}>
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
    )

  }

  export default MenuLinks
