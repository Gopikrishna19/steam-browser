import {connect} from 'react-redux';
import {clearUserCredentials} from '../action-creators/clear-user-credentials';
import {getGames} from '../action-creators/get-games';
import {getUserCredentials} from '../action-creators/get-user-credentials';
import {App} from '../components/app';

export const AppContainer = connect(
  state => state,
  {
    getGames,
    clearUserCredentials,
    getUserCredentials
  },
  ({apiKey, steamId}, actions) => ({
    ...actions,
    isReady: Boolean(apiKey && steamId),
    getGames: actions.getGames.bind(null, apiKey, steamId)
  })
)(App);
