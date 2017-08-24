import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Games} from './games';

export class GamesList extends Component {
  componentWillMount() {
    this.props.getGames();
  }

  render() {
    return (
      <div>
        <h1>My Steam Games!!</h1>
        <Games games={this.props.games}/>
      </div>
    );
  }
}

GamesList.displayName = 'GamesList';
GamesList.propTypes = {
  getGames: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired
};
