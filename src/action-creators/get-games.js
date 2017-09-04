import actions from '../actions';
import {getGameData} from '../store';

export const getGames = () =>
  async dispatch => {
    try {
      const games = await getGameData().games.query();
      dispatch({
        games,
        type: actions.SET_GAMES
      });
    } catch (e) { }
  };
