import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
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
    ya.call();

    this.setState({ value: '' });
  }

  render() {
    const { buttonStyle } = styles;

    return (
      <div>
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
