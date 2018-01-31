import { API_URL_LOGIN } from '../../constants';

export const SET_LOGIN = 'SET_LOGIN';


/* Cette fonction renvoie un token si la combinaison email+password est bonne
    Sinon elle renvoie une erreur
*/
export function login(email, password) {
    return dispatch =>
        fetch(`${API_URL_LOGIN}`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
                {
                    email : email,
                    password: password
                })
        }).then(
            res => res.json()
        ).then(
             login => dispatch(setLogin(login))
        );
}

export function setLogin(login) {
    return {
        type: SET_LOGIN,
        login
    }
}

