import React, { Component } from 'react';
import { Input, Button, Grid, Typography } from '@material-ui/core';
import YoutubeApi from '../modules/YoutubeApi';
import SearchResults from './SearchResults';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

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
      this.setState({videos: result.data.items});
      // console.log(this.state.videos);
    }).catch(error => {
      console.log(error);
    });

    this.setState({ value: '' });
  }

  render() {
    const styles = {
      container: {
        marginTop: '150px',
      },
      form: {
        marginTop: '30px',
        textAlign: 'center', 
      },
      buttonStyle: {
        marginTop: '10px',
        backgroundColor: '#2196f3', 
        color: '#fff',
      },
    };

    return (
      <div>
        <Grid container justify="center" alignItems="center" style={styles.container}>
          <Grid item xs={8}>
            <Typography align="center" variant="display1">
              This is a Youtube Clone site and is under development.
            </Typography>
            <form onSubmit={this.onFormSubmit.bind(this)} style={styles.form}>
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
                style={styles.buttonStyle}
              >
              Search
              </Button>
            </form>
          </Grid>
          <SearchResults videos={this.state.videos}/>
        </Grid>
      </div>
    );
  }
}
