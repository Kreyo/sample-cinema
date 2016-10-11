import React from 'react';
import ReactDOM from 'react-dom';
import {Homepage} from '../components/homepage.jsx';
import {Details} from '../components/details';
import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Homepage}>
        </Route>
        <Route path="/movie/:movieId" component={Details}/>
    </Router>
), document.getElementById('root'));