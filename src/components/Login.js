import React from 'react';
import { login } from "../redux/authentication/actions";
import { connect } from "react-redux";
import { browserHistory } from 'react-router'
import Home from './Home';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import MovieList from "./MovieList";
import Play from "./Play";


/*
C'est la page qui contient le composant Login avec le formulaire de connexion
Je fais appel à un réducteur pour vérifier l'authentification grâce à l'API
reqres.in. Il me renvoie bien un token mais que je n'ai pas su transmettre dans
les autres vues pour gérer la sécurité de la connexion sur le reste de l'application.
 */
export class Login extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            authenticated : false,
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let { email, password } = this.state;
        let { login } = this.props;

        if(!this.state.authenticated){
            return (
                <div className="login-page">
                    <div className="form">
                        <form className="login-form">
                            <input type="text" placeholder="username" onChange={e => this.setState({email: e.target.value})} value={email} />
                            <input type="password" placeholder="password" onChange={e => this.setState({password: e.target.value})} value={password} />
                            <button onClick={this.onSubmit}>login</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <Router>

                    <Switch>
                        <Route exact path="/" component={MovieList} />
                        <Route path="/play" component={Play} />
                    </Switch>

                </Router>
            )
        }

    }

    onSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state;
        let login = this.props.login(email, password);
        this.setState({
            email: '',
            password: ''
        });

        login.then(function(result) {
            if (result.login.token) {
                window.location.href = "/";
            }
        });


    }
}



const mapStateToProps = ({ login }) => ({
    login,
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
