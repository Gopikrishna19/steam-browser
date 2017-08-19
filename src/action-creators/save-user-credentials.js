import {getGameData} from '../store';
import actions from '../actions';

export const saveUserCredentials = data =>
  async dispatch => {
    const {user} = getGameData();
    await user
      .delete()
      .insert(data)
      .save();
    dispatch({
      ...data,
      type: actions.SET_USER_CREDENTIALS
    });
  };
