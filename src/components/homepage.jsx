import React from 'react';
import {Header} from './parts/header';
import {MovieList} from './movies/movie-list';

export class Homepage extends React.Component {
    render() {
        return(
            <div className="home">
                <Header></Header>
                <div className="container-fluid">
                    <div className="col-md-12 movies-list">
                        <h1>Popular Releases</h1>
                        <MovieList source="/api/home/movie-list"/>
                    </div>
                </div>
            </div>
        );
    }
};