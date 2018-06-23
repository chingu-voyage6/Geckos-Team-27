import React, { Component } from 'react';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div> 
        <NavBar />
        <h1 style={styles.introStyle}>This is a Youtube Clone site and is under development.</h1>
      </div>
    );
  }
}

const styles = {
  introStyle: {
    display: 'flex',
    height: '720px',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
