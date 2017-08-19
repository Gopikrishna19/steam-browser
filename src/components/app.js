import PropTypes from 'prop-types';
import React from 'react';

export const App = props =>
  <div>
    {props.apiKey && props.steamId ? 'Ready to load' : 'Setup needed'}
  </div>;

App.displayName = 'App';
App.propTypes = {
  apiKey: PropTypes.string.isRequired,
  steamId: PropTypes.string.isRequired
};

