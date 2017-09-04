import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './app.scss';

const closeAfter = (context, action) => () => {
  action();
  context.setState({open: false});
};

const toggleMenu = function () {
  this.setState({open: !this.state.open});
};

export class AppMenu extends Component {
  constructor() {
    super();

    this.state = {open: false};
  }

  render() {
    return (
      <div className={styles.appMenuContainer}>
        <button className={styles.appMenuButton} onClick={toggleMenu.bind(this)}>
          <i className="material-icon">menu</i>
        </button>
        <input type="checkbox" checked={this.state.open}/>
        <div className={styles.appMenu}>
          <button
            className={this.props.showOnlyInstalled ? styles.toggled : ''}
            onClick={closeAfter(this, () => this.props.toggleOnlyInstalled(!this.props.showOnlyInstalled))}
          >
            Show only installed
          </button>
          <button
            className={styles.sync}
            onClick={closeAfter(this, () => this.props.getGames())}
          >
            Reload games from disk
          </button>
          <button
            className={styles.sync}
            onClick={closeAfter(this, () => this.props.getGamesFromSteam())}
          >
            Reload games from steam
          </button>
          <button
            className={styles.clear}
            onClick={closeAfter(this, () => this.props.clearUserCredentials())}>
            Clear credentials
          </button>
        </div>
      </div>
    );
  }
}

AppMenu.displayName = 'AppMenu';
AppMenu.propTypes = {
  clearUserCredentials: PropTypes.func.isRequired,
  getGames: PropTypes.func.isRequired,
  getGamesFromSteam: PropTypes.func.isRequired,
  showOnlyInstalled: PropTypes.bool.isRequired,
  toggleOnlyInstalled: PropTypes.func.isRequired
};

