import {combineReducers} from 'redux';
import jokesList from './joke/reducer'

export default () => combineReducers({
  jokesList
});
