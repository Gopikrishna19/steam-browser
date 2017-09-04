import {remote} from 'electron';
import React from 'react';
import styles from './app.scss';

const closeWindow = () => remote.getCurrentWindow().close();
const minimizeWindow = () => remote.getCurrentWindow().minimize();
const restoreWindow = () => {
  const currentWindow = remote.getCurrentWindow();
  currentWindow.isMaximized() ?
    currentWindow.unmaximize() :
    currentWindow.maximize();
};

export const AppControls = () =>
  <div className={styles.controls}>
    <button className={styles.button} onClick={minimizeWindow}>&#x0005F;</button>
    <button className={styles.button} onClick={restoreWindow}>&#x025FB;</button>
    <button className={styles.button} onClick={closeWindow}>&#x000D7;</button>
  </div>;

AppControls.displayName = 'AppControls';

