import axios from 'axios';

export default class YoutubeApi {
  constructor(endpoint, params) {
    this.endpoint = endpoint;
    this.params = params;
    this.params['key'] = process.env.REACT_APP_API_KEY;

  }

  call() {
    const params = this.params;

    axios.get('https://www.googleapis.com/youtube/v3/' + this.endpoint, {
      params,
    }).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  }
}