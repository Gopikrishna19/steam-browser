import React, {Component} from 'react';
import styles from './setup.scss';

export class Setup extends Component {
  constructor() {
    super();

    this.state = {
      apiKey: '',
      steamId: ''
    };

    this.handleSteamIdChange = this.handleSteamIdChange.bind(this);
    this.handleApiKeyChange = this.handleApiKeyChange.bind(this);
  }

  handleApiKeyChange(event) {
    this.setState({apiKey: event.target.value});
  }

  handleSteamIdChange() {
    this.setState({steamId: event.target.value});
  }

  render() {
    return (
      <section className={styles.form}>
        <h1>Setup</h1>
        <div className={styles.formContainer}>
          <div>
            <input
              type="text"
              placeholder="Steam ID"
              value={this.state.steamId}
              onChange={this.handleSteamIdChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="API Key"
              value={this.state.apiKey}
              onChange={this.handleApiKeyChange}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Save</button>
          </div>
        </div>
      </section>
    );
  }
}

Setup.displayName = 'Setup';
