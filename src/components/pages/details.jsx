import React from 'react';
import {Header} from '../parts/header';
import {MovieTable} from '../movies/movie-table';
import {MovieComments} from '../movies/movie-comments';
import {getMovieDetails} from '../movies/movie-api';

export class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    componentDidMount() {
        getMovieDetails(this.props.params.movieId, (result) => {
            this.setState({
                movie: result.data
            });
        });
    }

    render() {
        return(
                <div className="movie__details">
                    <Header/>
                    <div className="container-fluid">
                        <div className="col-md-12 movie__dates">
                            <h1>{this.state.movie.Title}</h1>
                            <div className="movie__thumbnail col-md-4" style={{backgroundImage: 'url('+this.state.movie.Poster+')'}}>
                            </div>
                            <MovieTable movie={this.state.movie}/>
                        </div>
                        <MovieComments movieId={this.props.params.movieId}/>
                    </div>
                </div>
        );
    }
}
