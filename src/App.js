import React, { Component } from 'react';
import dotenv from 'dotenv';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { Grid } from '@material-ui/core';
import './css/style.css';
dotenv.config();

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ marginTop: '30px' }}
        >
          <Grid item xs={8}>
            <Main /> {/* Main component holding all the routes */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
