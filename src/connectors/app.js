import {connect} from 'react-redux';
import {clearUserCredentials} from '../action-creators/clear-user-credentials';
import {getUserCredentials} from '../action-creators/get-user-credentials';
import {App} from '../components/app';

export const AppContainer = connect(
  ({apiKey, steamId}) => ({
    apiKey,
    steamId
  }),
  {
    clearUserCredentials,
    getUserCredentials
  }
)(App);
