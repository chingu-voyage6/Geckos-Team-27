import React from 'react';
import {
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

 
export default () => {
  return (
    <div>
      <Typography variant="display1" gutterBottom>
        About us
      </Typography>
      <Typography variant="body2" gutterBottom>
        <p>
          This site is made by{' '}
          <a href="https://github.com/chingu-voyage6/Geckos-Team-27">
            Geckos-27 team
          </a>{' '}
          in association with <a href="https://chingu.io">Chingu Cohorts</a>. We
          are a community of developers working on bringing our abilities to new
          heights. 
        </p>
        <p>
          This is an open source site with functionalities that mimics
          Youtube. Feel free to use it as you like.
        </p>
      </Typography>
      

      <Typography variant="display1" gutterBottom>
        Members
      </Typography>
      <List>
        <ListItem button component="a" href="https://github.com/denibulkashvili">
          <Avatar>D</Avatar>
          <ListItemText primary="Denis" secondary="Team Lead, Developer" />
        </ListItem>
        <ListItem button component="a" href="https://github.com/kuromoka">
          <Avatar>K</Avatar>
          <ListItemText primary="kuromoka" secondary="Developer" />
        </ListItem>
        <ListItem button component="a" href="https://github.com/WinnLeong">
          <Avatar>W</Avatar>
          <ListItemText primary="Winn" secondary="Developer" />
        </ListItem>
      </List>
    </div>
    
  );
};