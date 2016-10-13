import React from 'react';
import axios from 'axios';
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
        axios.post('/api/user/login',
            {
                'email': this.state.email,
                'password': this.state.password
            })
            .then((result) => {
                browserHistory.push('/');
            })
            .catch( (error) => {
                this.setState({
                    loginFailed: true
                });
            });
    }

    render() {
        return(
            <div className="login">
                <Header/>
                <div className="container static-container">
                    {this.state.loginFailed ?  <div className="alert alert-danger">Email or password incorrect!</div> : ''}
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
