import React, { Component } from 'react';
import { Input, Button, Grid, Typography } from '@material-ui/core';
import YoutubeApi from '../modules/YoutubeApi';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onFormSubmit(event) {
    event.preventDefault();
    const params = {
      maxResults: '20',
      part: 'snippet',
      q: this.state.value,
      type: 'video, playlist'
    };
    const ya = new YoutubeApi('search', params);
    ya.call()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <Grid
          container
          justify="center"
          alignItems="center"
          className="container"
        >
          <Grid item xs={8}>
            <Typography align="center" variant="display1">
              This is a Youtube Clone site and is under development.
            </Typography>
            <form onSubmit={this.onFormSubmit.bind(this)} className="formStyle">
              <Input
                placeholder="Search"
                fullWidth
                style={{ paddingLeft: '3px' }}
                type="search"
                onChange={event => this.setState({ value: event.target.value })}
                value={this.state.value}
              />
              <Button type="submit" variant="contained" className="buttonStyle">
                Search
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
