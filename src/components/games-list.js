import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {getOwnedGames} from '../services/get-owned-games';
import {Games} from './games';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      games: []
    };
  }

  componentWillMount() {
    getOwnedGames(this.props.steamId, this.props.apiKey).then(data => this.setState({games: data.response.games}));
  }

  render() {
    return (
      <div>
        <h1>My Steam Games!!</h1>
        <Games games={this.state.games}/>
      </div>
    );
  }
}

App.displayName = 'App';
App.propTypes = {
  apiKey: PropTypes.string.isRequired,
  steamId: PropTypes.string.isRequired
};
