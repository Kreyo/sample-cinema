import React from 'react';
import {Header} from '../parts/header';
import { Link, browserHistory } from "react-router"

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginFailed: false
        }
    }

    setEmail(event) {
        this.setState({
            email : event.target.value
        });
    }

    setPassword(event) {
        this.setState({
            password : event.target.value
        });
    }

    login(event) {
        event.preventDefault();
        $.post('/ajax-login', {
            'email': this.state.email,
            'password': this.state.password},
            (success) => {
                browserHistory.push('/');
            }
        ).fail(( data ) => {
            this.setState({
                loginFailed: true
            });
        });
    }

    renderErrors() {
        if (this.state.loginFailed) {
            return (
                <div className="alert alert-danger">Email or password incorrect!</div>
            );
        } else {
            return '';
        }
    }

    render() {
        return(
            <div className="login">
                <Header/>
                <div className="container static-container">
                    {this.renderErrors()}
                    <form className="form-signin" onSubmit={this.login.bind(this)}>
                        <h1 className="form-signin-heading">Sign in</h1>
                        <label className="sr-only">Email address</label>
                        <input id="inputEmail" className="form-control" placeholder="Email address" required="" type="email"
                        onChange={this.setEmail.bind(this)}/>
                        <label className="sr-only">Password</label>
                        <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password"
                               onChange={this.setPassword.bind(this)}/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
                    </form>
                </div>
            </div>
        );
    }
}
