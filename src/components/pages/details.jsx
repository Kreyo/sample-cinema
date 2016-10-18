import React from 'react';
import {Header} from '../parts/header';
import {MovieTable} from '../movies/movie-table';
import {CommentListState} from '../../containers/movies/movie-comments';
import {getMovieDetails} from '../movies/movie-api';

export class Details extends React.Component {

    componentDidMount() {
        getMovieDetails(this.props.params.movieId, (result) => {
            this.props.setMovie(result.data);
        });
    }

    render() {
        return(
                <div className="movie__details">
                    <Header/>
                    <div className="container-fluid">
                        <div className="col-md-12 movie__dates">
                            <h1>{this.props.movie.Title}</h1>
                            <div className="movie__thumbnail col-md-4" style={{backgroundImage: 'url('+this.props.movie.Poster+')'}}>
                            </div>
                            <MovieTable movie={this.props.movie}/>
                        </div>
                        <CommentListState movieId={this.props.params.movieId}/>
                    </div>
                </div>
        );
    }
}
