import React from 'react';
import {Header} from '../parts/header';

export class Ads extends React.Component {
    render() {
        return(
            <div className="ads">
                <Header/>
                <div className="container static--container">
                    <h1>Advertisers</h1>
                    <p className="about-content">
                        Wow, someone actually clicked on this link. :D
                    </p>
                </div>
            </div>
        );
    }
}
