import React, { Component } from 'react';
import YoutubeApi from '../modules/YoutubeApi';

export default class RelatedVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentWillMount() {
    const params = {
      maxResults: '10',
      part: 'snippet',
      relatedToVideoId: this.props.videoId,
      type: 'video',
    };
    const ya = new YoutubeApi('search', params);
    ya.call().then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
