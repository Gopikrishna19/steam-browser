import React from 'react';
import {Provider} from 'react-redux';
import {App} from './components/app';
import {getStore} from './store';

export const AppProvider = () =>
  <Provider store={getStore()}>
    <App/>
  </Provider>;

AppProvider.displayName = 'AppProvider';

