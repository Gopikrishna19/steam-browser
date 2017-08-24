import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GamesListContainer} from '../connectors/games-list';
import {SetupContainer} from '../connectors/setup';
import styles from './app.scss';

const reloadWindow = () => window.location.reload();

const showOnlyInstalled = function (event) {
  this.props.showOnlyInstalled(event.target.checked);
};

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
            <label><input type='checkbox' onChange={showOnlyInstalled.bind(this)}/><span>Show only installed</span></label>
            <button onClick={reloadWindow}>Refresh Games</button>
            <button onClick={this.props.reloadGames}>Reload Games</button>
            <button onClick={this.props.clearUserCredentials}>Update Credentials</button>
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
  reloadGames: PropTypes.func.isRequired,
  showOnlyInstalled: PropTypes.func.isRequired
};
