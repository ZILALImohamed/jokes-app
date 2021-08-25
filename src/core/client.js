import axios from 'axios';

const Jokes = {
  getTen: () => axios.get('https://official-joke-api.appspot.com/jokes/ten')
};

const Photos = {
  getRandomPhoto: () => axios.get('https://picsum.photos/200')
};


export default {
  Jokes,
  Photos
};
