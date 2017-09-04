import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GamesListContainer} from '../connectors/games-list';
import {Menu} from '../connectors/menu';
import {SetupContainer} from '../connectors/setup';
import {AppControls} from './app-controls';
import styles from './app.scss';
import {SearchInput} from './search-input';

export class App extends Component {
  componentWillMount() {
    this.props.getUserCredentials();
  }

  render() {
    return (
      this.props.isReady ?
        <section className={styles.container}>
          <header className={styles.header}>
            <h1>Games</h1>
            <SearchInput onChange={this.props.updateSearchString} value={this.props.searchString}/>
            <Menu/>
            <AppControls/>
          </header>
          <main className={styles.main}>
            <GamesListContainer/>
          </main>
        </section> :
        <section className={styles.container}>
          <header className={styles.header}>
            <h1>Games</h1>
            <AppControls/>
          </header>
          <SetupContainer/>
        </section>
    );
  }
}

App.displayName = 'App';
App.propTypes = {
  getUserCredentials: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired,
  searchString: PropTypes.string.isRequired,
  updateSearchString: PropTypes.func.isRequired
};
