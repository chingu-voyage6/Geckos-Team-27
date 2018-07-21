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


const styles = theme => ({
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
  
});

function SearchResults(props) {
  const { classes, theme } = props;

  let videoListContent;
  const videos = props.videos;
  console.log(props.videos);
  if(videos) {
    videoListContent = (
      <div>
        {videos.map((vid, i) => (
          <Card className={classes.card} key={i}>
            <Grid container>
            <Grid item xs={3}>
            <CardMedia
              className={classes.cover}
              image={vid.snippet.thumbnails.medium.url}
              title={vid.snippet.title}
            />
            </Grid>
            <Grid item xs>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="headline">Title: {vid.snippet.title}</Typography>
                <Typography variant="subheading" color="textSecondary">
                  Description: {vid.snippet.description}
                </Typography>
              </CardContent>
              <div className={classes.buttons}>
                <Button size="small">
                  View
                </Button>
              </div>
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
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchResults);