import React from 'react';
import { Link } from 'react-router'
export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <Link className="navbar-brand" to={`/`}>Super Cinema</Link>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link activeClassName={"active"} to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link activeClassName={"active"} to={`/about`}>About</Link>
                        </li>
                        <li>
                            <Link activeClassName={"active"} to={`/terms`}>Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link activeClassName={"active"} to={`/ads`}>Advertisers</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
