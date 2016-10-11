import React from 'react';
import {Header} from '../parts/header';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: []
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

    register(event) {
        event.preventDefault();
    }

    renderErrors() {
        if (this.state.errors.length > 0) {
            return (
                this.state.errors.map((error) => {
                  <div className="alert alert-danger">{error}</div>
                })
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
                    <form className="form-signin" onSubmit={this.register.bind(this)}>
                        <h1 className="form-signin-heading">Sign up</h1>
                        <label className="sr-only">Email address</label>
                        <input id="inputEmail" className="form-control" placeholder="Email address" required="" type="email"
                               onChange={this.setEmail.bind(this)}/>
                        <label className="sr-only">Password</label>
                        <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password"
                               onChange={this.setPassword.bind(this)}/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}
