import React, {Component} from 'react'
import Header from "../Header/Header"
import Body from "../Body"
import Footer from "../Footer"
import styles from './styles'

class Container extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Container;
