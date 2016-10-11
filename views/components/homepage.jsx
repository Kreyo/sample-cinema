import React from 'react';
import {Header} from './header';
import {MovieList} from './movie-list';

export class Homepage extends React.Component {
    render() {
        return(
            <div className="home">
                <Header></Header>
                <div className="container-fluid">
                    <div className="col-md-12 movies-list">
                        <h1>Popular Releases</h1>
                        <MovieList source="/movie-list-ajax"/>
                    </div>
                </div>
            </div>
        );
    }
};
