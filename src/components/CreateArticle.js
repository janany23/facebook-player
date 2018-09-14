import React from 'react';
import NavBar from "./NavBar";

export default class CreateArticle extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let {content, title} = this.state;

    }

    render() {
        const divStyle = {
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            paddingTop: "5em"
        };

        // if (!this.props.authenticated) {
        //     return (
        //         <Redirect to='/login' authenticated={true}/>
        //     );
        // }

        return (
            <div style={divStyle}>
                <NavBar/>
                <div className="">
                    <form className="">
                        <h1>Rédigez votre article</h1>
                        <label>Titre de votre article </label>
                        <input type='text' label='Titre' style={{margin: '2em'}}
                               onChange={e => this.setState({title: e.target.value})}/>
                        <br/>
                        <textarea style={{margin: '2em'}} rows='20' cols='150'
                                  onChange={e => this.setState({content: e.target.value})}></textarea>
                        <button onClick={this.onSubmit}>Publier l'article</button>
                    </form>
                </div>
            </div>
        )
    }
}
