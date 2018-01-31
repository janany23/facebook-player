import React from 'react';
import Home from './Home';

/*
Cette page va me permettre d'afficher soit la liste des films, soit le trailer du film
 */
export default class Content extends React.Component {

    render() {
        const styleDiv = {
            marginLeft: '25%'
        }

        return (
            <Home style={styleDiv}>
                {this.props.children}
            </Home>
        );
    }
}
