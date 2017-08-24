import {connect} from 'react-redux';
import {getGames} from '../action-creators/get-games';
import {GamesList} from '../components/games-list';

export const GamesListContainer = connect(
  ({
     games,
     showOnlyInstalled
   }) => ({
    games,
    showOnlyInstalled
  }),
  {getGames}
)(GamesList);
