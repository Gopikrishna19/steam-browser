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
    // getOwnedGames().then(data => this.setState({games: data.response.games}));
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
