import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import YoutubeApi from '../modules/YoutubeApi';
import ResponsiveEmbed from 'react-responsive-embed';

export default class VideoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {
        title: '',
        description: '',
      },
    };
  }

  componentDidMount() {
    const params = {
      part: 'snippet',
      id: this.props.videoId,
    };
    const ya = new YoutubeApi('videos', params);
    ya.call().then(result => {
      const video = result['data']['items'][0]['snippet'];
      this.setState({
        video: {
          title: video['title'],
          description: video['description'],
        }
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    
    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            {/* <YouTube videoId={this.props.videoId} opts={opts} onReady={onReady} /> */}
            <ResponsiveEmbed src={`https://www.youtube.com/embed/${this.props.videoId}`} allowfullscreen />
            <Typography gutterBottom variant="headline" component="h2">
              {this.state.video.title}
            </Typography>
            <Typography component="p">
              {this.state.video.description}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
