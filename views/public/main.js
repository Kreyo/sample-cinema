import React from 'react';
import ReactDOM from 'react-dom';
import {Homepage} from '../components/homepage.jsx';
import {Details} from '../components/details';
import {About, Ads, Terms} from '../components/static-pages';
import {Login} from '../components/user/login';
import {Register} from '../components/user/register';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Homepage}>
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/movie/:movieId" component={Details}/>
        <Route path="/about" component={About}/>
        <Route path="/terms" component={Terms}/>
        <Route path="/ads" component={Ads}/>
    </Router>
), document.getElementById('root'));