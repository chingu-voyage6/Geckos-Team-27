import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CardContent, 
    CardMedia,
    Hidden, 
    Typography 
} from '@material-ui/core';
import { Link } from 'react-router-dom'; 


const styles = theme => ({
  wrapper: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  card: {
    display: 'flex',
    marginTop: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 320,
    height: 180,
    [theme.breakpoints.down('sm')]: {
      minWidth: '75vw',
      minHeight: '75vw',
    },
  },
});

function SearchResults(props) {
  const { classes } = props;

  let videoListContent;
  const videos = props.videos;
  console.log(props.videos);
  if(videos) {
    videoListContent = (
      <div>
        {videos.map((vid, i) => (
          <Card className={classes.card} key={i}>
            <div className={classes.wrapper}>
              <Link to={`/watch/${vid.id.videoId}`} target="_blank">
                <CardMedia
                  className={classes.cover}
                  image={vid.snippet.thumbnails.high.url}
                  title={vid.snippet.title}
                />
              </Link>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Link to={`/watch/${vid.id.videoId}`} target="_blank" style={{ textDecoration: 'none' }}>
                    <Typography variant="headline" gutterBottom > {vid.snippet.title} </Typography>
                  </Link>
                  <Hidden smDown>
                    <Typography variant="subheading" color="textSecondary">
                      {vid.snippet.description}
                    </Typography>
                  </Hidden>
                </CardContent>
              </div>
            </div>
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