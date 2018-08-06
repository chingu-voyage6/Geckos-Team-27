import React, { Component } from 'react';
import {
  Input,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import YoutubeApi from '../modules/YoutubeApi';
import SearchResults from './SearchResults';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      order: 'relevance',
      type: 'video,channel,playlist',
      videoDuration: 'any'
    };
  }

  onFormSubmit(event) {
    event.preventDefault();
    const params = {
      maxResults: '20',
      part: 'snippet',
      q: this.state.value,
      type: this.state.type,
      order: this.state.order,
      videoDuration: this.state.videoDuration
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

  //search video type
  handleType = event => {
    this.setState({
      type: event.target.value
    });

    if (event.target.value !== 'video') {
      this.setState({
        videoDuration: 'any'
      });
    }
  };

  handleDuration = event => {
    this.setState({
      videoDuration: event.target.value
    });

    if (event.target.value !== 'any') {
      this.setState({
        type: 'video'
      });
    }
  };

  render() {
    const styles = {
      container: {
        marginTop: '150px'
      },
      form: {
        marginTop: '30px',
        textAlign: 'center'
      },
      buttonStyle: {
        marginTop: '10px',
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    };

    return (
      <div>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={24}
          style={styles.container}
        >
          <Grid item xs={8}>
            <Typography align="center" variant="display1">
              This is a Youtube Clone website. <br />
              Use search to find the videos you want.
            </Typography>
            <form onSubmit={this.onFormSubmit.bind(this)} style={styles.form}>
              <Input
                placeholder="Search"
                fullWidth
                style={{ paddingLeft: '3px' }}
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
          
          <Grid item xs={8}>
            <div style={{ textAlign: 'center' }}>
              {/*Sort feature*/}
              <FormControl style={{ margin: '0 5px' }}>
                <InputLabel htmlFor="sort-feature">Sort by</InputLabel>
                <Select
                  value={this.state.order}
                  onChange={event =>
                    this.setState({ order: event.target.value })
                  }
                  input={<Input name="sort" id="sort-feature" />}
                >
                  <MenuItem value="relevance">Relevance</MenuItem>
                  <MenuItem value="date">Upload Date</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="viewCount">View Count</MenuItem>
                </Select>
              </FormControl>

              {/*Type*/}

              <FormControl style={{ margin: '0 5px' }}>
                <InputLabel htmlFor="type-feature">Type</InputLabel>
                <Select
                  value={this.state.type}
                  onChange={this.handleType}
                  input={<Input name="type" id="type-feature" />}
                >
                  <MenuItem value="video,channel,playlist">All</MenuItem>
                  <MenuItem value="channel">Channel</MenuItem>
                  <MenuItem value="playlist">Playlist</MenuItem>
                  <MenuItem value="video">Video</MenuItem>
                </Select>
              </FormControl>

              {/*Duration*/}

              <FormControl style={{ margin: '0 5px' }}>
                <InputLabel htmlFor="duration-feature">Duration</InputLabel>
                <Select
                  value={this.state.videoDuration}
                  onChange={this.handleDuration}
                  input={<Input name="duration" id="duration-feature" />}
                  style={{ minWidth: '80px' }}
                >
                  <MenuItem value="any">Any</MenuItem>
                  <MenuItem value="short">{'Short (< 4 minutes)'}</MenuItem>
                  <MenuItem value="long">{'Long (> 20 minutes)'}</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <SearchResults videos={this.state.videos}/>
        </Grid>
      </div>
    );
  }
}
