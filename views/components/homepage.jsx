import React from 'react';
import {Header} from './header';
import {MovieList} from './movie-list';

export class Homepage extends React.Component {
    render() {
        return(
            <div className="home">
                <Header></Header>
                <div className="container-fluid">
                    <div className="col-md-8">
                        <h2>Latest Releases</h2>
                        <MovieList source="/movie-list-ajax"/>
                    </div>
                    <div className="col-md-4">
                        <h3>Navigation</h3>
                    </div>
                </div>
            </div>
        );
    }
};
