import PropTypes from 'prop-types';
import React from 'react';
import styles from './app.scss';

export const SearchInput = props =>
  <label className={styles.searchInput}>
    <input
      onChange={event => props.onChange(event.target.value)}
      placeholder="Search games"
      required
      type="text"
    />
    <i className="material-icon">search</i>
  </label>;

SearchInput.displayName = 'SearchInput';
SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

