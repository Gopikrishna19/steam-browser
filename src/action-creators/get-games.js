import actions from '../actions';
import {getOwnedGames} from '../services/get-owned-games';

export const getGames = (apiKey, steamId) =>
  async dispatch => {
    const {response: {games}} = await getOwnedGames(steamId, apiKey);
    dispatch({
      games,
      type: actions.SET_GAMES
    });
  };
