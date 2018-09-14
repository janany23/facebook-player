export const SET_ARTICLES = 'SET_ARTICLES';
import data from '../../listArticles';
import axios from 'axios';

export function getArticles() {
    return dispatch =>
        axios.get('../../listArticles.json')
            .then(articles => dispatch(setArticles(articles.data)));
}

export function setArticles(articles) {
    return {
        type: SET_ARTICLES,
        articles
    }
}
