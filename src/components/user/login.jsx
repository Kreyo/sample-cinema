import React from 'react';
import {Header} from '../parts/header';
import { browserHistory } from "react-router"
import {login} from './user-api';

export class Login extends React.Component {

    login(event) {
        event.preventDefault();
        const data = {
            'email': this.props.email,
            'password': this.props.password
        };

        login(
            data,
            (result) => {
                browserHistory.push('/');
            },
            (error) => {
                this.props.loginSubmit(false);
            }
        );
    }

    render() {
        return(
            <div className="login">
                <Header/>
                <div className="container static__container">
                    {this.props.loginFailed ?  <div className="alert alert-danger">Email or password incorrect!</div> : ''}
                    <form className="form__signin" onSubmit={this.login.bind(this)}>
                        <h1 className="form-signin-heading">Sign in</h1>
                        <label className="sr-only">Email address</label>
                        <input id="inputEmail" className="form-control" placeholder="Email address" required="" type="email"
                               onChange={this.props.setEmail.bind(this)}/>
                        <label className="sr-only">Password</label>
                        <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password"
                               onChange={this.props.setPassword.bind(this)}/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
                    </form>
                </div>
            </div>
        );
    }
}
