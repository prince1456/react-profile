import React, {Component} from "react"
// import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from "react-bootstrap"
import './styles.css'
import { Link } from "react-router-dom"


class NavBar extends Component {
    render(){
      return(
            <div className="hallo">
                <ul className='navUl'>
                  <li> <Link activeClassName={'active'} to='/'> Home </Link></li>
                  <li> <Link to='/About'> About </Link> </li>
                  <li> Contact</li>
                </ul>
            </div>
      )
    }

}
export default NavBar;
