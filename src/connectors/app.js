import {connect} from 'react-redux';
import {App} from '../components/app';

export const AppContainer = connect(
  ({apiKey, steamId}) => ({
    apiKey,
    steamId
  })
)(App);
