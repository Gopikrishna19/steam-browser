import {combineReducers} from 'redux';
import apiKey from './api-key';
import games from './games';
import searchString from './search-string';
import showOnlyInstalled from './show-only-installed';
import steamId from './steam-id';

export default combineReducers({
  apiKey,
  games,
  showOnlyInstalled,
  searchString,
  steamId
});
