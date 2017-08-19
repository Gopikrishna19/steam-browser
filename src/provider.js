import React from 'react';
import {Provider} from 'react-redux';
import {AppContainer} from './connectors/app';

import {getStore} from './store';

export const AppProvider = () =>
  <Provider store={getStore()}>
    <AppContainer/>
  </Provider>;
;

AppProvider.displayName = 'AppProvider';

