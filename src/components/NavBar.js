import React from 'react';
// import '../css/SideBar.css';

export default class NavBar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }
    }

    render() {

        const hidden = {
            // hidden: "true"
        }

        const ulStyle = {
            listStyleType: "none",
            margin: 0,
            marginLeft: "4em",
            padding: 0,
            overflow: "hidden",
            backgroundColor: 'black',
        }
        const styleDiv = {
            // marginLeft: '5em',
            // height: '3.5em'
        }

        const liStyle = {
            float: "left",
        }

        const li_a_style = {
            display: "block",
            color: "white",
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: "none",
        }



        return (
            <div style={styleDiv} className="w3-container w3-teal">
                <ul style={this.props.hiddenBar ? hidden : ulStyle}>
                    <li style={liStyle}>
                        <a style={li_a_style} className="active" href="#">New Releases</a>
                    </li>
                    <li style={liStyle}>
                        <a style={li_a_style} href="#">Top Picks</a>
                    </li>
                    <li style={liStyle}>
                        <a style={li_a_style} href="#">Preorder</a>
                    </li>
                    <li style={liStyle}>
                        <a style={li_a_style} href="#">Last chance</a>
                    </li>
                </ul>
            </div>
        );

    }
}

NavBar.defaultProps = {
    hidden: true
}
