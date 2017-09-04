import PropTypes from 'prop-types';
import React from 'react';
import styles from './app.scss';

const showOnlyInstalled = function () {
  this.toggleOnlyInstalled(!this.showOnlyInstalled);
};

export const AppMenu = props =>
  <div className={styles.appMenuContainer}>
    <label className={styles.appMenuButton} htmlFor="app-menu">
      <i className="material-icon">menu</i>
    </label>
    <input type="checkbox" id="app-menu"/>
    <div className={styles.appMenu}>
      <button className={props.showOnlyInstalled ? styles.toggled : ''} onClick={showOnlyInstalled.bind(props)}>
        Show only installed
      </button>
      <button className={styles.sync} onClick={props.getGames}>Reload games from disk</button>
      <button className={styles.sync} onClick={props.reloadGames}>Reload games from steam</button>
      <button className={styles.clear} onClick={props.clearUserCredentials}>Clear credentials</button>
    </div>
  </div>;

AppMenu.displayName = 'AppMenu';
AppMenu.propTypes = {
  clearUserCredentials: PropTypes.func.isRequired,
  reloadGames: PropTypes.func.isRequired,
  getGames: PropTypes.func.isRequired,
  showOnlyInstalled: PropTypes.bool.isRequired,
  toggleOnlyInstalled: PropTypes.func.isRequired
};

