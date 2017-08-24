import PropTypes from 'prop-types';
import React from 'react';
import styles from './game.scss';

export const Game = props =>
  <li className={styles.game}>
    <object data={`http://cdn.akamai.steamstatic.com/steam/apps/${props.game.appid}/capsule_231x87.jpg`} type="image/jpeg">
      <img src='src/static/game-placeholder.png' alt=""/>
    </object>
    <div className={styles.details}>
      <h2>{props.game.name}</h2>
      <p>Play time: {props.game.playtime_forever}</p>
    </div>
  </li>;

Game.displayName = 'Game';
Game.propTypes = {
  game: PropTypes.object.isRequired
};
