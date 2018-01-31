import React from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { getMovies } from '../redux/movies/actions';



const ulStyle = {
    listStyleType: "none",
    margin: 0,
    marginLeft: "4em",
    padding: 0,
    overflow: "hidden",
    // backgroundColor: 'black',
}

const divStyle = {
    padding: '3em'
}

/*
Cette page représente la page d'accueil
Elle contient la liste des films (ici en occurence 1 seul car l'API n'en avait qu'un)
En cliquant sur un film on tombe sur la page de trailer Batman vs Superman
Pour récupérer les films j'utilises un réducteur
 */
export const MovieList = ({ movies, getMoviesInList }) => (
    <Content >
        <div id='movie-list' className='col-md-6' style={divStyle}>
            <ul style={ulStyle}>
                {movies.map( (c,i) =>

                    <li key={i} >
                        <a href='/play'>
                            <img src={c.Poster}/>
                            <br/>
                            <h4>{c.Title}</h4>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    </Content>
);

const mapStateToProps = ({ movies }) => ({
    movies,
});

const mapDispatchToProps = dispatch => ({
    getMoviesInList() {
        return () => {
            dispatch(getMovies());
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
