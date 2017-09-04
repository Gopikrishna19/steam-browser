import {connect} from 'react-redux';
import {clearUserCredentials} from '../action-creators/clear-user-credentials';
import {getGames} from '../action-creators/get-games';
import {getGamesFromSteam} from '../action-creators/get-games-from-steam';
import {toggleOnlyInstalled} from '../action-creators/toggle-only-installed';
import {AppMenu} from '../components/app-menu';

export const Menu = connect(
  state => ({
    showOnlyInstalled: state.showOnlyInstalled
  }),
  {
    getGames,
    clearUserCredentials,
    getGamesFromSteam,
    toggleOnlyInstalled
  }
)(AppMenu);
