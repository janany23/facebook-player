import React from 'react';
import Login from './Login';
import MovieList from './MovieList';
import Play from './Play';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import {login} from "../redux/authentication/actions";
import {connect} from "react-redux";
import {Home} from "./Home";

/*
La classe App avec le routage des pages login, home et play
Malheureusement je n'ai pas su faire la partie gestion de l'authentification
pour vérifier si l'user est connecté ou pas.
Ce qui veut dire que quand on lance l'application on tombe sur la page d'accueil
au lieu de tomber sur la page Login :(
 */
export default class App extends React.Component {

    render() {
        return (
            <Router>

                <Switch>
                    <Route exact path="/" component={MovieList} />
                    <Route path="/play" component={Play} />
                    <Route  path="/login" component={Login} />
                    <Redirect to='/login' />
                </Switch>

            </Router>
        )
    }

}

