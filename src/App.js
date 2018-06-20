import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

class App extends Component {
  
  render() {
    const { contentStyle, introStyle } = styles;

    return (
      <div style={contentStyle}>
        <div style={introStyle}>
          <h1>This is a Youtube Clone site and is under development.</h1>
        </div>

        <SearchBar />
      
      </div>
    );
  }
}

const styles = {
  contentStyle: {
    display: 'flex',
    flexDirection: 'column',        
    justifyContent: 'center',
    alignItems: 'center'
  },
  introStyle: {
    display: 'flex',
    height: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '250px'
  }
};

export default App;
