import PropTypes from 'prop-types';
import React from 'react';
import {Setup} from './setup';

export const App = props => props.apiKey && props.steamId ? 'Ready to load' : <Setup/>;

App.displayName = 'App';
App.propTypes = {
  apiKey: PropTypes.string.isRequired,
  steamId: PropTypes.string.isRequired
};
