import React, { Component } from 'react';
import { Input, Button, Grid, Typography } from '@material-ui/core';
import YoutubeApi from '../modules/YoutubeApi';

export default class SearchBar extends Component {
  state = { value: '' };

  onFormSubmit(event) {
    event.preventDefault();
    const params = {
        maxResults: '20',
        part: 'snippet',
        q: this.state.value,
        type: 'video, playlist',
    };
    const ya = new YoutubeApi('search', params);
    ya.call().then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });

    this.setState({ value: '' });
  }

  render() {
    const { buttonStyle } = styles;

    return (
      <div>
        <Grid container justify="center" alignItems="center" style={{marginTop: '200px', textAlign: 'center'}}>
          <Grid item xs={8}>
            <Typography align="center" variant="headline">
              This is a Youtube Clone site and is under development.
            </Typography>
            <form onSubmit={this.onFormSubmit.bind(this)}>
              <Input 
                placeholder="Search" 
                fullWidth 
                style={{paddingLeft: '3px'}}
                type="search" 
                onChange={event => this.setState({ value: event.target.value })}
                value={this.state.value}
              />
              <Button 
                type="submit"
                variant="contained"
                style={buttonStyle} 
              >
              Search
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    marginTop: '10px',
    backgroundColor: '#2196f3', 
    color: '#fff'
  }
};
