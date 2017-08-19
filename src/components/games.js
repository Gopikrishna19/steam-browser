import PropTypes from 'prop-types';
import React from 'react';
import {Game} from './game';

export const Games = props =>
  <ul>
    {
      props.games.map(
        game =>
          <Game
            key={game.appid}
            game={game}
          />
      )
    }
  </ul>;

Games.displayName = 'Games';
Games.propTypes = {
  games: PropTypes.array.isRequired
};
