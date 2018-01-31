import { SET_LOGIN } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGIN:
            return action.login
        default:
            return state
    }
};
