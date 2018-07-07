import React from 'react';
import { Grid } from '@material-ui/core';
import RelatedVideo from './RelatedVideo';
import VideoViewer from './VideoViewer';

const Watch = ({ match }) => {
  const videoId = match.params.videoId;
  return (
    <div>
      <Grid container alignItems="flex-start">
        <Grid item xs={8}>
          <VideoViewer videoId={videoId} />
        </Grid>
        <Grid item xs={4}>
          <RelatedVideo videoId={videoId} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Watch;
