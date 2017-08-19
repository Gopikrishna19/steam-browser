import actions from '../actions';

const handlers = {
  [actions.SET_API_KEY]: (state, action) => action.apiKey
};

export default function (state = '', action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
