import { combineReducers } from 'redux';
import movies from './movies';
import login from './authentication';

export default combineReducers({
    movies,
    login
});
