import React from 'react';
import { Link } from 'react-router'
import {getCookie} from '../utility/services';

export class Header extends React.Component {

    getRightSide() {
        if (getCookie('sessionID')) {
            return(
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link activeClassName={"active"} to={`/profile`}>{decodeURIComponent(getCookie('email'))}</Link>
                    </li>
                    <li>
                        <Link to={`/logout`}>Logout</Link>
                    </li>
                </ul>
            );
        } else {
            return(
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link activeClassName={"active"} to={`/login`}>Login</Link>
                    </li>
                    <li>
                        <Link activeClassName={"active"} to={`/register`}>Register</Link>
                    </li>
                </ul>
            );
        }
    }

    render() {
        return(
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <Link className="navbar-brand hidden-xs" to={`/`}>Super Cinema</Link>
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
                    {this.getRightSide()}
                </div>
            </nav>
        );
    }
}
