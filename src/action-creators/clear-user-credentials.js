import {getGameData} from '../store';
import actions from '../actions';

export const clearUserCredentials = () =>
  async dispatch => {
    await getGameData().user.delete().save();
    dispatch({
      type: actions.CLEAR_USER_CREDENTIALS
    })
  };
