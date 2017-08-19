import actions from '../actions';
import {getGameData} from '../store';

export const getUserCredentials = () =>
  async dispatch => {
    const [
      user = {
        apiKey: '',
        steamId: ''
      }
    ] = await getGameData().user.query();
    dispatch({
      ...user,
      type: actions.SET_USER_CREDENTIALS
    });
  };
