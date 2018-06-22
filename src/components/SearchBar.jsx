import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import axios from 'axios';

const API_KEY = 'AIzaSyDAfW_5XoEHmW6r0KsxFo9xJ6DYSuk5RH8';

export default class SearchBar extends Component {
  state = { value: '' };

  onFormSubmit(event) {
    event.preventDefault();

    let params = {      
      key: API_KEY,
      maxResults: '20',
      part: 'snippet',
      q: this.state.value,
      type: 'video, playlist'
    };
    
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })

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
