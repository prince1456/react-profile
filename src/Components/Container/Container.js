import React, {Component} from 'react'
import Header from "../Header/Header"
import {Body, About } from "../Body"

import Footer from "../Footer"
import styles from './styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Container extends Component {
  render() {
    return (

        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component= {Body} />
            <Route path='/About' exact component= {About} />
           <Footer/>
         </div>
        </BrowserRouter>

    )
  }
}

export default Container;
