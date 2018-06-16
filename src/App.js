import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h1 style={styles.introStyle}>This is a Youtube Clone site and is under development.</h1>
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
