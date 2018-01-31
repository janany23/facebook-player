import { API_URL_MOVIES } from '../../constants';

export const SET_MOVIES = 'SET_MOVIES';

export function getMovies() {
    return dispatch =>
        fetch(`${API_URL_MOVIES}`)
            .then(
                res => res.json()
            )
            .then(
                res => [res]
            )
            .then(
                movies => dispatch(setMovies(movies))
            );
}

export function setMovies(movies) {
    return {
        type: SET_MOVIES,
        movies
    }
}
