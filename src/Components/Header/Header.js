import React, {Component} from "react"
import TopBar from "./TopBar"
import NavBar from "./NavBar"

import './style.css'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <TopBar />
        <NavBar />
        <div className="header-title">
          <div className="title">
            <span> Ali Alizada</span>
            <p> BORN AS DEVELOPER GROWN TO BE CREATIVE</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
