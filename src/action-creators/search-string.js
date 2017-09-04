import actions from '../actions';

export const updateSearchString = searchString => ({
  searchString,
  type: actions.UPDATE_SEARCH_STRING
});
