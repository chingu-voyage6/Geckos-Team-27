
import React from 'react';
import { AppBar, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  menuButton: {
    color: 'white'
  }
};

const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
        <Typography variant="display1">
          <Grid container justify="center" alignItems="center">
            <Grid item sm={6}>
              <Button  size="large" component={Link} to="/" style={styles.menuButton}> 
                YouTube Clone 
              </Button>
            </Grid>
            <Grid item sm={6}>
              <Button size="large" component={Link} to="/about" style={styles.menuButton}>
                About
              </Button>
            </Grid>
          </Grid>
        </Typography>
      </AppBar>
    </div>
  );
};

export default NavBar;
