import actions from '../actions';

const handlers = {
  [actions.SET_GAMES]: (state, action) => action.games
};

export default function (state = [], action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
