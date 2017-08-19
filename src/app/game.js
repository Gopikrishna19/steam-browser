import PropTypes from 'prop-types';
import React from 'react';

export const Game = props =>
  <li>
    {props.game.name}
  </li>;

Game.displayName = 'Game';
Game.propTypes = {
  game: PropTypes.object.isRequired
};
