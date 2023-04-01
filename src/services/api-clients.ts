import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5510977660a34e3bb2320f5a6f3615dd'
  }
});
