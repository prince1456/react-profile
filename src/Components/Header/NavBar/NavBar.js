import React, {Component} from "react"
// import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from "react-bootstrap"
import './styles.css'


class NavBar extends Component {
    render(){
      return(
            <div className="hallo">
                <ul className='navUl'>
                  <li >Home</li>
                  <li >Portfolio</li>
                  <li>Contact</li>
                </ul>
            </div>
      )
    }

}
export default NavBar;
