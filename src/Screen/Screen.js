import React, {Component} from "react"
import {Container} from '../Components/Container'


class Screen extends Component {
  render(){
    return(
      <div style={styles.screen} >
        <Container/>
      </div>

    )
  }
}

export default Screen;

const styles ={
  screen:{
    flexDirection: 'column',
    display: 'flex',
    width: '100%'


  }
}
