import React from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
// import { connect } from "react-redux";
// import Login from "./Login";
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//     Redirect,
// } from 'react-router-dom';

/*
Cette page contient le template de l'application avec la navbar et la sidebar
 */
export default class Home extends React.Component {

    constructor(props) {

        super(props);

    }


    render() {

        /*
        C'est ici que je voulais gérer l'authentification de l'utilisateur grâce à l'aide d'un props mais
        que je n'ai pas su transmettre sur le component Home.
         */

        // if (!this.props.isLoggedIn) {
        //     return (
        //         <Router>
        //             <Switch>
        //                 <Route path="/login" component={Login} />
        //                 <Redirect to='/login' />
        //             </Switch>
        //         </Router>
        //     );
        // }

        return (
            <div>
                <SideBar />
                <NavBar />
                {this.props.children}
            </div>
        )
    }
}

// const mapStateToProps = ({ login }) => ({
//     login,
// });
// //
// export default connect(mapStateToProps)(Home);
