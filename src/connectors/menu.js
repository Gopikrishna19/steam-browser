import {connect} from 'react-redux';
import {clearUserCredentials} from '../action-creators/clear-user-credentials';
import {getGames} from '../action-creators/get-games';
import {toggleOnlyInstalled} from '../action-creators/toggle-only-installed';
import {AppMenu} from '../components/app-menu';

export const Menu = connect(
  state => ({
    showOnlyInstalled: state.showOnlyInstalled
  }),
  {
    getGames,
    clearUserCredentials,
    reloadGames: () => {},
    toggleOnlyInstalled
  }
)(AppMenu);
