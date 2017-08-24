import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {getInstallStatus, INSTALLED, RETRIEVING} from '../services/get-install-status';
import styles from './game.scss';

export class Game extends Component {
  constructor() {
    super();

    this.state = {
      installStatus: RETRIEVING
    };
  }

  componentWillMount() {
    getInstallStatus(this.props.game.appid)
      .then(installStatus => this.setState({installStatus}));
  }

  render() {
    return !this.props.showOnlyInstalled || this.state.installStatus === INSTALLED ?
      <li className={styles.game}>
        <object data={`http://cdn.akamai.steamstatic.com/steam/apps/${this.props.game.appid}/capsule_231x87.jpg`} type="image/jpeg">
          <img src='src/static/game-placeholder.png' alt=""/>
        </object>
        <div className={styles.details}>
          <h2>{this.props.game.name}</h2>
          <p>Play time: {this.props.game.playtime_forever}</p>
        </div>
        <div className={styles.installStatus}>
          {this.state.installStatus}
        </div>
      </li> : null;
  }
}

Game.displayName = 'Game';
Game.propTypes = {
  game: PropTypes.object.isRequired,
  showOnlyInstalled: PropTypes.bool.isRequired
};
