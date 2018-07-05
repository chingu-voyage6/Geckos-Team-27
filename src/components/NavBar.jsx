
import React from 'react';
import { AppBar, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';




const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
        <Typography variant="display1" color="inherit">
          <Grid container sm={12} justify="center" alignItems="center">
            <Grid item sm={6}>
              <Button  size="large" component={Link} to="/"> {/* link to homepage */}
                YouTube Clone 
              </Button>
            </Grid>
            <Grid item sm={6}>
              <Button size="large" component={Link} to=   "/about">
                About
              </Button>
            </Grid>
          </Grid>
        </Typography>
      </AppBar>
      </div>
    )
}

export default NavBar;