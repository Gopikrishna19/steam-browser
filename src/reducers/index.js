import apiKey from './api-key';
import {combineReducers} from 'redux';
import games from './games';
import steamId from './steam-id';

export default combineReducers({
  apiKey,
  games,
  steamId
});
