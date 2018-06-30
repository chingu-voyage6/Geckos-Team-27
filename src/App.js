import React, { Component } from 'react';
import dotenv from 'dotenv';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { Grid } from '@material-ui/core';
dotenv.config();

class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <Grid container alignItems="center" style={{height:'600px'}}>
          <Grid 
            container 
            justify="center" 
            alignItems="center"
            spacing={8}
            style={{textAlign: 'center'}}
          >

            <Grid item xs={8}>
              <h1>This is a Youtube Clone site and is under development.</h1>
            </Grid>
            <Grid item xs={6}>
              <SearchBar />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;