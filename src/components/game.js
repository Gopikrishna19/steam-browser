import {execSync} from 'child_process';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './game.scss';

const isInstalled = appId => {
  try {
    const installStatus = execSync(`reg query hkcu\\software\\valve\\steam\\apps\\${appId} /v Installed`)
      .toString()
      .replace(/\r\n/g, '')
      .match(/0x(\d)/)[1];
    return Boolean(parseInt(installStatus));
  } catch (e) { return false; }
};

export const Game = props =>
  <li className={styles.game}>
    <object data={`http://cdn.akamai.steamstatic.com/steam/apps/${props.game.appid}/capsule_231x87.jpg`} type="image/jpeg">
      <img src='src/static/game-placeholder.png' alt=""/>
    </object>
    <div className={styles.details}>
      <h2>{props.game.name}</h2>
      <p>Play time: {props.game.playtime_forever}</p>
    </div>
    <div className={styles.installStatus}>
      {isInstalled(props.game.appid) ? 'Installed' : 'Not Installed'}
    </div>
  </li>;

Game.displayName = 'Game';
Game.propTypes = {
  game: PropTypes.object.isRequired
};
