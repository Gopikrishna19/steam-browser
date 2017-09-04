import {connect} from 'react-redux';
import {getGames} from '../action-creators/get-games';
import {GamesList} from '../components/games-list';

const buildFilter = searchString => game => {
  if (!searchString) return true;
  return game.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
};

export const GamesListContainer = connect(
  ({
     games,
     showOnlyInstalled,
     searchString
   }) => ({
    games: games.filter(buildFilter(searchString)),
    showOnlyInstalled
  }),
  {getGames}
)(GamesList);
