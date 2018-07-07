import React from 'react';
import { Typography } from '@material-ui/core';
import YouTube from 'react-youtube';

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0
  }
};

const onReady = event => {
  event.target.pauseVideo();
};

const VideoViewer = ({ videoId }) => {
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoViewer;
