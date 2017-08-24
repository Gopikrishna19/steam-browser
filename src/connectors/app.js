import {connect} from 'react-redux';
import {clearUserCredentials} from '../action-creators/clear-user-credentials';
import {getUserCredentials} from '../action-creators/get-user-credentials';
import {toggleOnlyInstalled} from '../action-creators/toggle-only-installed';
import {App} from '../components/app';

export const AppContainer = connect(
  state => ({
    isReady: Boolean(state.apiKey && state.steamId),
    showOnlyInstalled: state.showOnlyInstalled
  }),
  {
    clearUserCredentials,
    getUserCredentials,
    reloadGames: () => {},
    toggleOnlyInstalled
  }
)(App);
