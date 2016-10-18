import React from 'react';
import {Header} from '../parts/header';
import {MovieListState} from '../../containers/movies/movie-list';

export class Homepage extends React.Component {
    render() {
        return(
            <div className="home">
                <Header></Header>
                <div className="container-fluid">
                    <div className="col-md-12 movies__list">
                        <h1>Popular Releases</h1>
                        <MovieListState/>
                    </div>
                </div>
            </div>
        );
    }
};
