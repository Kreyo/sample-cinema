import React from 'react';
import { Link } from 'react-router'
export class Header extends React.Component {

    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    getRightSide() {
        if (this.getCookie('sessionID')) {
            return(
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link activeClassName={"active"} to={`/`}>{decodeURIComponent(this.getCookie('email'))}</Link>
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
