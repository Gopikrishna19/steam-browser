import {connect} from 'react-redux';
import {clearUserCredentials} from '../action-creators/clear-user-credentials';
import {getUserCredentials} from '../action-creators/get-user-credentials';
import {showOnlyInstalled} from '../action-creators/show-only-installed';
import {App} from '../components/app';

export const AppContainer = connect(
  state => ({
    isReady: Boolean(state.apiKey && state.steamId)
  }),
  {
    clearUserCredentials,
    getUserCredentials,
    reloadGames: () => {},
    showOnlyInstalled
  }
)(App);
