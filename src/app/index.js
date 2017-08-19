import React, {Component} from 'react';
import {getOwnedGames} from '../services/get-owned-games';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      games: []
    };
  }

  componentWillMount() {
    getOwnedGames().then(data => this.setState({games: data.response.games}));
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

App.displayName = 'App';
