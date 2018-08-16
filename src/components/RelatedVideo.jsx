import React, { Component } from 'react';
import { GridList, GridListTile, GridListTileBar, ListSubheader } from '@material-ui/core';
import YoutubeApi from '../modules/YoutubeApi';
import { withWindowSizeListener } from 'react-window-size-listener';

class RelatedVideo extends Component {
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

    const windowWidth = this.props.windowSize.windowWidth;
    let numberCols;
    if (windowWidth < 600) {
      numberCols = 3;
    }  else if (windowWidth < 960) {
      numberCols = 4;
    } else {
      numberCols = 5;
    }

    return (
      <div>
        <ListSubheader component="div">Related Videos</ListSubheader>
        <GridList cellHeight={'auto'} cols={numberCols} style={styles.grid} spacing="10">
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


export default withWindowSizeListener(RelatedVideo);