import {connect} from 'react-redux';
import {getUserCredentials} from '../action-creators/get-user-credentials';
import {updateSearchString} from '../action-creators/search-string';
import {App} from '../components/app';

export const AppContainer = connect(
  state => ({
    isReady: Boolean(state.apiKey && state.steamId),
    searchString: state.searchString
  }),
  {
    getUserCredentials,
    updateSearchString
  }
)(App);
