import React from 'react';
import {Header} from '../parts/header';
import {MovieTable} from '../movies/movie-table';
import {CommentListState} from '../../containers/movies/movie-comments';
import {getMovieDetails} from '../movies/movie-api';
import {profile, like, unlike} from '../user/user-api';
import {getCookie} from '../utility/services';

export class Details extends React.Component {

    componentDidMount() {
        getMovieDetails(this.props.params.movieId, (result) => {
            this.props.setMovie(result.data);
        });

        if (getCookie('email')) {
            profile(decodeURIComponent(getCookie('email')), (result) => {
                if (result.data.favorites.indexOf(this.props.params.movieId) > -1 ) {
                    this.props.setFavorite(true);
                } else {
                    this.props.setFavorite(false);
                }
            });
        }
    }

    addFavorite(event) {
        event.preventDefault();
        let data = {
            email: decodeURIComponent(getCookie('email')),
            movieId: this.props.params.movieId
        };
        like(data, (result) => {
            this.props.setFavorite(true);
        });
    }

    removeFavorite(event) {
        event.preventDefault();
        let data = {
            email: decodeURIComponent(getCookie('email')),
            movieId: this.props.params.movieId
        };
        unlike(data, (result) => {
            this.props.setFavorite(false);
        });
    }

    renderLikeButton() {
        return this.props.favorite
            ?
                <a href="#" className="btn btn-xs btn-success" onClick={this.removeFavorite.bind(this)}>
                    <span className="glyphicon glyphicon-star"/> Liked
                </a>
            :
                <a href="#" className="btn btn-xs btn-default" onClick={this.addFavorite.bind(this)}>
                    <span className="glyphicon glyphicon-star"/> Like
                </a>;
    }

    render() {
        return(
                <div className="movie__details">
                    <Header/>
                    <div className="container-fluid">
                        <div className="col-md-12 movie__dates">
                            <h1>{this.props.movie.Title}  {getCookie('email') ? this.renderLikeButton() : ''}</h1>
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
