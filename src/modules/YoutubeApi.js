import axios from 'axios';

export default class YoutubeApi {
  constructor(endpoint, params) {
    this.endpoint = endpoint;
    this.params = params;
    this.params['key'] = process.env.REACT_APP_API_KEY;
  }

  async call() {
    const params = this.params;
    const result = await axios.get('https://www.googleapis.com/youtube/v3/' + this.endpoint, {
      params,
    });

    return result;
  }
}
