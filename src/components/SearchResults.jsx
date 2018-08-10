import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
    Button,
    Card, 
    CardContent, 
    CardMedia,
    Grid, 
    Typography 
} from '@material-ui/core';
import { Link } from 'react-router-dom'; 


const styles = {
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 180,
    height: 120,
    margin: 20,
  },
  
};

function SearchResults(props) {
  const { classes } = props;

  let videoListContent;
  const videos = props.videos;
  // console.log(props.videos);
  if(videos) {
    videoListContent = (
      <div>
        {videos.map((vid, i) => (
          <Card className={classes.card} key={i}>
            <Grid container>
              <Grid item xs={3}>
                <Link to={`/watch/${vid.id.videoId}`} target="_blank">
                  <CardMedia
                      className={classes.cover}
                      image={vid.snippet.thumbnails.medium.url}
                      title={vid.snippet.title}
                    />
                </Link>
              </Grid>
              <Grid item xs>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                  <Link to={`/watch/${vid.id.videoId}`} target="_blank" style={{ textDecoration: 'none' }}>
                    <Typography variant="headline" > {vid.snippet.title} </Typography>
                  </Link>
                    <Typography variant="subheading" color="textSecondary">
                      {vid.snippet.description}
                    </Typography>
                  </CardContent>
                </div>
              </Grid>
            </Grid>
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

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchResults);