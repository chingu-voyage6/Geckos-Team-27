import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            YouTube Clone Logo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
