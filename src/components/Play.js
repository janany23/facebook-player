import React from 'react';
import Content from './Content';

export default class Play extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const divStyle = {
            textAlign: 'center',
            paddingTop: "5em"
        }

        return (
            <Content>
                <div style={divStyle}>
                    <video controls src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4">Ici la description alternative</video>
                </div>
            </Content>

        )
    }
}
