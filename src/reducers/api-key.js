import actions from '../actions';

const handlers = {
  [actions.CLEAR_USER_CREDENTIALS]: (state, action) => '',
  [actions.SET_USER_CREDENTIALS]: (state, action) => action.apiKey
};

export default function (state = '', action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
