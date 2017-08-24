import actions from '../actions';

const handlers = {
  [actions.SHOW_ONLY_INSTALLED]: (state, action) => action.show
};

export default function (state = false, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
