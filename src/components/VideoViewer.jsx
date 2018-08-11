import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import YouTube from 'react-youtube';
import YoutubeApi from '../modules/YoutubeApi';

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
    const opts = {
      height: 390,
      width: 640,
      playerVars: {
        autoplay: 0
      }
    };

    const styles = theme => ({
      videoWrapper: {
        position: 'relative',
        paddingBottom: '56.25%', /* 16:9 */
        paddingTop: 25,
        height: 0,
        overflow: 'hidden'
      },
      iframe: {
        width: 640,
        height: 320,
        [theme.breakpoints.down('sm')]: {
          width: 480,
          height: 240
        }
      }
    });

    const onReady = event => {
      event.target.pauseVideo();
    };

    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Grid item md={8} sm={12} height="990">
            <YouTube videoId={this.props.videoId} opts={opts} onReady={onReady} />
            <div className={styles.videoWrapper}> 
              <iframe width="640" height="390" className={styles.iframe} src={`https://www.youtube.com/embed/${this.props.videoId}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
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

