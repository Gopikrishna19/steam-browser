import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {SetupContainer} from '../connectors/setup';
import {GamesListContainer} from '../connectors/games-list';

export class App extends Component {
  componentWillMount() {
    this.props.getUserCredentials();
  }

  render() {
    return (
      this.props.isReady ?
        <section>
          <button onClick={this.props.clearUserCredentials}>Update Credentials</button>
          <button onClick={this.props.getGames}>Reload Games</button>
          <GamesListContainer/>
        </section> :
        <SetupContainer/>
    );
  }
}

App.displayName = 'App';
App.displayName = 'App';
App.propTypes = {
  clearUserCredentials: PropTypes.func.isRequired,
  getGames: PropTypes.func.isRequired,
  getUserCredentials: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired
};
