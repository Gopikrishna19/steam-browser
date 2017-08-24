import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {SetupContainer} from '../connectors/setup';
import {GamesListContainer} from '../connectors/games-list';
import styles from './app.scss';

export class App extends Component {
  componentWillMount() {
    this.props.getUserCredentials();
  }

  render() {
    return (
      this.props.isReady ?
        <section>
          <header className={styles.header}>
            <h1>Games</h1>
            <button onClick={this.props.clearUserCredentials}>Update Credentials</button>
            <button onClick={this.props.reloadGames}>Reload Games</button>
          </header>
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
  getUserCredentials: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired,
  reloadGames: PropTypes.func.isRequired
};
