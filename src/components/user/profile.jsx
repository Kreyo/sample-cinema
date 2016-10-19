import React from 'react';
import {Header} from '../parts/header';
import {profile, favorites} from './user-api';
import {getCookie} from '../utility/services';
import {Link} from 'react-router';
import {MovieGrid} from '../movies/movie-grid';

export class UserProfile extends React.Component {

    componentDidMount() {
        const email = decodeURIComponent(getCookie('email'));

        profile(email, (result) => {
            this.props.setProfile(result.data);

        });

        favorites((result) => {
            this.props.setFavorites(result.data);
        });
    }

    renderFavorites() {
        return(
            <ul>
                {this.props.favorites.map((favorite) => (
                    <li>
                        <Link to={`/movie/` + favorite._id}>{}</Link>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return(
            <div className="user__profile">
                <Header/>
                <div className="container-fluid">
                    <div className="col-md-12 user__data">
                        <h1>Your profile</h1>
                        <p className="text-center">Email:</p><p className="text-center">{this.props.profile.email}</p>
                        <h3>Your favorite movies</h3>
                        {this.props.favorites ? <MovieGrid movies={this.props.favorites}/> : 'No favorite movies yet!'}
                    </div>
                </div>
            </div>
        );
    }
}
