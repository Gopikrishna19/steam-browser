import {connect} from 'react-redux';
import {Setup} from '../components/setup';
import {saveUserCredentials} from '../action-creators/save-user-credentials';

export const SetupContainer = connect(
  ({apiKey, steamId}) => ({
    apiKey,
    steamId
  }),
  {saveUserCredentials}
)(Setup);
