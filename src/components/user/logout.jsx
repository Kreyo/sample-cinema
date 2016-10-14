import React from 'react';
import axios from 'axios';
import { browserHistory } from "react-router"

export class Logout extends React.Component {

    constructor(props) {
        super(props);
        axios.get('/api/user/logout')
            .then((result) => {
                browserHistory.push('/');
            });

    }

    render() {
        return(
            <div className="logout">
                Logging out...
            </div>
        );
    };
}
