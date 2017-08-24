import InlineDB from 'inlinedb';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

let games;
let idb;
let user;
let store;

export function getGameData() {

  if (!idb) {

    idb = new InlineDB('game-data');

    games = idb.createTable('games');
    user = idb.createTable('user');

  }

  return {
    games,
    idb,
    user
  };

}

export function getStore() {

  if (!store) {

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );

  }

  return store;

}
