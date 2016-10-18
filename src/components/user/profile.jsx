import React from 'react';
import {Header} from '../parts/header';
import {profile} from './user-api';
import {getCookie} from '../utility/services';
import {Link} from 'react-router';

export class UserProfile extends React.Component {

    componentDidMount() {
        const email = decodeURIComponent(getCookie('email'));

        profile(email, (result) => {
            this.props.setProfile(result.data);

        });
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
                        {/*{Possible favorites list here}*/}
                    </div>
                </div>
            </div>
        );
    }
}
