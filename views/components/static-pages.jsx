import React from 'react';
import {Header} from './parts/header';

export class About extends React.Component {
    render() {
        return(
            <div className="about">
                <Header/>
                <div className="container static-container">
                    <h1>About Us</h1>
                    <p className="about-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        );
    }
}

export class Ads extends React.Component {
    render() {
        return(
            <div className="ads">
                <Header/>
                <div className="container static-container">
                    <h1>Advertisers</h1>
                    <p className="about-content">
                       Wow, someone actually clicked on this link.
                    </p>
                </div>
            </div>
        );
    }
}

export class Terms extends React.Component {
    render() {
        return(
            <div className="terms">
                <Header/>
                <div className="container static-container">
                    <h1>Terms and Conditions</h1>
                    <p className="terms-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        );
    }
}