import React from 'react';
import { connect } from 'react-redux';
import NavBar from "./NavBar";
import {getArticles} from "../redux/articles/actions";
import data from '../listArticles';



const ulStyle = {
    listStyleType: "none",
    margin: 0,
    marginLeft: "4em",
    padding: 0,
    overflow: "hidden",
    // backgroundColor: 'black',
};


const divStyle = {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    paddingTop: "5em"
};


export const ListArticle = ({ articles, getArticles }) => (
    <div style={divStyle}>
        <NavBar />
        <div id='article-list' className='col-md-6' style={{padding: '3em'}}>
            <ul style={{marginLeft: '10em'}}>
                {articles.map( (c,i) =>

                    <li key={i} >
                            <div>Titre : {c.title}</div>
                            <div>{c.content}</div>
                            <br/>
                    </li>
                )}
            </ul>
        </div>
    </div>
);

const mapStateToProps = ({ articles }) => ({
    articles,
});

const mapDispatchToProps = dispatch => ({
    getArticles() {
        return () => {
            dispatch(getArticles());
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListArticle);
