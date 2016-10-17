import React from 'react';
import ReactDOM from 'react-dom';
import {Homepage} from './components/pages/homepage.jsx';
import {Details} from './components/pages/details';
import {LoginState} from './containers/user/login-state';
import {Register} from './components/user/register';
import { Router, Route, browserHistory } from 'react-router';
import {Ads} from './components/static/ads';
import {Terms} from './components/static/terms';
import {About} from './components/static/about';
import {UserProfile} from './components/user/profile';
import {Logout} from './components/user/logout';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {cinemaApp} from './reducers'

const store = createStore(
    combineReducers({
            cinemaApp,
            routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
          <Router history={history}>
                <Route path="/" component={Homepage}/>
                <Route path="/login" component={LoginState}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={UserProfile}/>
                <Route path="/movie/:movieId" component={Details}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/about" component={About}/>
                <Route path="/terms" component={Terms}/>
                <Route path="/ads" component={Ads}/>
          </Router>
    </Provider>
), document.getElementById('root'));