import PropTypes from 'prop-types';
import React from 'react';
import {Games} from './games';

export const GamesList = props =>
  <div>
    <h1>My Steam Games!!</h1>
    <Games games={props.games}/>
  </div>;

GamesList.displayName = 'GamesList';
GamesList.propTypes = {
  games: PropTypes.array.isRequired
};
