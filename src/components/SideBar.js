import React from 'react';
// import '../css/SideBar.css';

export default class SideBar extends React.Component {

    render() {

        const divStyle = {
            width: '2em'
        };

        return (
            <div className="w3-sidebar w3-bar-block w3-black w3-xxlarge" style={divStyle}>
                <a href="/" className="w3-bar-item w3-button"><i className="fa fa-home"></i></a>
                <a href="/play" className="w3-bar-item w3-button"><i className="fa fa-play-circle"></i></a>
                <a href="/login" className="w3-bar-item w3-button"><i className="fa fa-power-off"></i></a>
            </div>
        );
    }
}
