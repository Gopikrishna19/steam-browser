import {connect} from 'react-redux';
import {GamesList} from '../components/games-list';

export const GamesListContainer = connect(({games}) => ({games}))(GamesList);
