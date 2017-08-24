import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Games} from './games';

export class GamesList extends Component {
  componentWillMount() {
    this.props.getGames();
  }

  render() {
    return (
      <Games
        games={this.props.games}
        showOnlyInstalled={this.props.showOnlyInstalled}
      />
    );
  }
}

GamesList.displayName = 'GamesList';
GamesList.propTypes = {
  getGames: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
  showOnlyInstalled: PropTypes.bool.isRequired
};
