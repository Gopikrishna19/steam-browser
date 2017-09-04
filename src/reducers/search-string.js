import actions from '../actions';

const handlers = {
  [actions.UPDATE_SEARCH_STRING]: (state, action) => action.searchString,
};

export default function (state = '', action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
