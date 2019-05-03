import axios from 'axios';

const KEY = 'AIzaSyDL0srXGcu69CocMEztsPPF9tcPSlWdqbQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxresults: 5,
      key: KEY
    }
});
