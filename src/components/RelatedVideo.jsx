import React, { Component } from 'react';
import { GridList, GridListTile, GridListTileBar, ListSubheader } from '@material-ui/core';
import YoutubeApi from '../modules/YoutubeApi';

export default class RelatedVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const params = {
      maxResults: '8',
      part: 'snippet',
      relatedToVideoId: this.props.videoId,
      type: 'video',
    };
    const ya = new YoutubeApi('search', params);
    ya.call().then(result => {
      this.setState({items: result['data']['items']});
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const styles = {
      grid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    };

    return (
      <div>
        <ListSubheader component="div">Related Videos</ListSubheader>
        <GridList cellHeight={180} cols={5} style={styles.grid}>
          {this.state.items.map(item => (
            <a href={`/watch/${item.id.videoId}`} key={item.id.videoId}>
              <GridListTile key={item.snippet.title}>
                <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                <GridListTileBar
                  title={item.snippet.title}
                  subtitle={item.snippet.channelTitle}
                />
              </GridListTile>
            </a>
          ))}
        </GridList>
      </div>
    );
  }
}
