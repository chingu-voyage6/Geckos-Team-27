import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'; 





class SearchResults extends Component {

  render() {

    const styles = {
      card: {
        maxWidth: 345,
        marginTop: 100,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    };

    let videoListContent;
    const videos = this.props.videos;
    console.log(this.props.videos);
    if(videos) {
      videoListContent = (
        <div>
          {videos.map((vid, i) => (
            <Card key={i} >
              
              <CardMedia
                image={vid.snippet.thumbnails.high.url}
                style={styles.media}
                spacing={10}
              >
                {/* <iframe width="560" title={i} height="315" src={"https://www.youtube.com/embed/"+vid.id.videoId} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> */}
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  <p>Title: {vid.snippet.title}</p>
                </Typography>
              </CardContent>  
               
                          
            </Card>
          ))}
        </div>  
      );
        
    } else {
      videoListContent = null;
    }
    return (
      <div>
        {videoListContent}
      </div>
    );
  }
}



export default SearchResults;