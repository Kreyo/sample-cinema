import React from 'react';
import {Header} from '../parts/header';

export const Login = ({email, password, loginFailed, loginSubmit, setEmail, setPassword}) => (
    <div className="login">
        <Header/>
        <div className="container static__container">
            {loginFailed ?  <div className="alert alert-danger">Email or password incorrect!</div> : ''}
            <form className="form__signin" onSubmit={loginSubmit.bind(this)}>
                <h1 className="form-signin-heading">Sign in</h1>
                <label className="sr-only">Email address</label>
                <input id="inputEmail" className="form-control" placeholder="Email address" required="" type="email"
                       onChange={setEmail.bind(this)}/>
                <label className="sr-only">Password</label>
                <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password"
                       onChange={setPassword.bind(this)}/>
                <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
            </form>
        </div>
    </div>
);
