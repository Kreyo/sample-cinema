import React from 'react';

export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Super Cinema</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
