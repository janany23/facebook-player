import React from 'react';
import Login from './Login';
import ArticleList from './ListArticle';
import CreateArticle from './CreateArticle';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

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
                    <Route exact path="/list" component={ArticleList} />
                    <Route exact path="/create" component={CreateArticle} />
                    <Route exact path="/login" component={Login} />
                    <Redirect to='/login' />
                </Switch>

            </Router>
        )
    }

}

