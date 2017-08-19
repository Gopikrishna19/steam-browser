import PropTypes from 'prop-types';

import React, {Component} from 'react';
import {SetupContainer} from '../connectors/setup';

export class App extends Component {
  componentWillMount() {
    this.props.getUserCredentials();
  }

  render() {
    return (
      this.props.apiKey && this.props.steamId ?
        <button onClick={this.props.clearUserCredentials}>Clear</button> :
        <SetupContainer/>
    );
  }
}

App.displayName = 'App';
App.displayName = 'App';
App.propTypes = {
  apiKey: PropTypes.string.isRequired,
  clearUserCredentials: PropTypes.func.isRequired,
  getUserCredentials: PropTypes.func.isRequired,
  steamId: PropTypes.string.isRequired
};
