import {remote} from 'electron';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GamesListContainer} from '../connectors/games-list';
import {SetupContainer} from '../connectors/setup';
import styles from './app.scss';

const closeWindow = () => remote.getCurrentWindow().close();
const minimizeWindow = () => remote.getCurrentWindow().minimize();
const reloadWindow = () => window.location.reload();
const restoreWindow = () => {
  const currentWindow = remote.getCurrentWindow();
  currentWindow.isMaximized() ?
    currentWindow.unmaximize() :
    currentWindow.maximize();
};

const showOnlyInstalled = function () {
  this.props.toggleOnlyInstalled(!this.props.showOnlyInstalled);
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
            <button className={this.props.showOnlyInstalled ? styles.toggled : styles.button} onClick={showOnlyInstalled.bind(this)}>
              Show only installed
            </button>
            <button className={styles.button} onClick={reloadWindow}>Refresh Games</button>
            <button className={styles.button} onClick={this.props.reloadGames}>Reload Games</button>
            <button className={styles.button} onClick={this.props.clearUserCredentials}>Update Credentials</button>
            <div className={styles.controls}>
              <button className={styles.button} onClick={minimizeWindow}>&#x0005F;</button>
              <button className={styles.button} onClick={restoreWindow}>&#x025FB;</button>
              <button className={styles.button} onClick={closeWindow}>&#x000D7;</button>
            </div>
          </header>
          <main className={styles.main}>
            <GamesListContainer/>
          </main>
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
  showOnlyInstalled: PropTypes.bool.isRequired,
  toggleOnlyInstalled: PropTypes.func.isRequired
};
