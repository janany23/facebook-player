import { SET_ARTICLES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_ARTICLES:
            console.log(action.articles)
            return action.articles;
        default:
            return state
    }
};
