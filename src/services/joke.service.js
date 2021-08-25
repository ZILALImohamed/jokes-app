import axios from 'axios';

export const getThenRandomJokes = () => axios.get('https://official-joke-api.appspot.com/jokes/ten');