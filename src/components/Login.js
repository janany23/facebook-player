import React from 'react';
import {browserHistory} from 'react-router'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            authenticated: false,
            username: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let {username} = this.state;
        if (username !== '') {
            this.setState({
                authenticated: true,
                username: ''
            });
        }
    }

    render() {
        let {username} = this.state;

        if (this.state.authenticated) {
            return (
                <Redirect to='/create' props={{authenticated: true}}/>
            )
        }
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="username"
                               onChange={e => this.setState({username: e.target.value})} value={username}/>
                        <button onClick={this.onSubmit}>Connexion</button>
                    </form>
                </div>
            </div>
        )


    }


}
