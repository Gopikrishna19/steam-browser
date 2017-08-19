import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './setup.scss';

export class Setup extends Component {
  constructor(props) {
    super();

    this.state = {
      apiKey: props.apiKey,
      steamId: props.steamId
    };

    this.handleApiKeyChange = this.handleApiKeyChange.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.handleSteamIdChange = this.handleSteamIdChange.bind(this);
  }

  handleApiKeyChange(event) {
    this.setState({apiKey: event.target.value});
  }

  handleSaveButtonClick() {
    this.props.saveUserCredentials(this.state);
  }

  handleSteamIdChange(event) {
    this.setState({steamId: event.target.value});
  }

  render() {
    return (
      <section className={styles.form}>
        <h1>Setup</h1>
        <div className={styles.formContainer}>
          <input
            type="text"
            placeholder="Steam ID"
            value={this.state.steamId}
            onChange={this.handleSteamIdChange}
          />
          <input
            type="text"
            placeholder="API Key"
            value={this.state.apiKey}
            onChange={this.handleApiKeyChange}
          />
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={this.handleSaveButtonClick}
            >
              Save
            </button>
          </div>
        </div>
      </section>
    );
  }
}

Setup.displayName = 'Setup';
Setup.propTypes = {
  apiKey: PropTypes.string.isRequired,
  saveUserCredentials: PropTypes.func.isRequired,
  steamId: PropTypes.string.isRequired
};
