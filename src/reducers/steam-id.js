import actions from '../actions';

const handlers = {
  [actions.SET_STEAM_ID]: (state, action) => action.steamId
};

export default function (state = '', action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
