import React from 'react';
import {Header} from '../parts/header';
import {profile} from './user-api';
import {getCookie} from '../utility/services';

export class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: []
        };
    }

    componentDidMount() {
        const email = decodeURIComponent(getCookie('email'));

        profile(email, (result) => {
            this.setState({
                profile: result.data
            });
        });
    }

    render() {
        return(
            <div className="user__profile">
                <Header/>
                <div className="container-fluid">
                    <div className="col-md-12 user__data">
                        <h1>Your profile</h1>
                        <p>Email:</p><p>{this.state.profile.email}</p>
                    </div>
                </div>
            </div>
        );
    }
}
