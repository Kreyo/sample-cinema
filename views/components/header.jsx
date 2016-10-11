import React from 'react';
import { Link } from 'react-router'
export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <Link className="navbar-brand" to={`/`}>Super Cinema</Link>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/`}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
