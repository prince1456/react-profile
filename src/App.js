import React, { Component } from 'react';
import Screen from "./Screen/Screen"

class App extends Component {
  render() {
    
    return (
      <div style={styles.app}>
          <Screen />
      </div>
    );
  }
}

const styles = {
  app:{
    display: "flex",
    justifyContent: "center"

  }
}


export default App;
