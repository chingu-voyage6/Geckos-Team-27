import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
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
      maxResults: '10',
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
    return (
      <div>
        <GridList cellHeight={180} cols={1} style={{ width: '320px' }}>
          <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {this.state.items.map(item => (
            <GridListTile key={item.snippet.title}>
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
              <GridListTileBar
                title={item.snippet.title}
                subtitle={item.snippet.channelTitle}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
