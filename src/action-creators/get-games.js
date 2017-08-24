import actions from '../actions';
import {getGameData} from '../store';

export const getGames = () =>
  async dispatch => {
    let games = [];
    try { games = await getGameData().games.query(); } catch (e) { }
    dispatch({
      games,
      type: actions.SET_GAMES
    });
  };
