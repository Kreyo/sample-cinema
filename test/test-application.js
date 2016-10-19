import 'babel-polyfill';
import { mount, shallow } from 'enzyme';
import React from 'react';
import {Homepage} from '../src/components/pages/homepage';
import {Terms} from '../src/components/static/terms';
import {About} from '../src/components/static/about';
import {MovieListState} from '../src/containers/movies/movie-list';
import { expect } from 'chai';
import sinon from 'sinon';
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();

describe('<Homepage />', () => {
    it('should have popular releases', () => {
        const wrapper = shallow(<Homepage />);
        expect(wrapper.contains(<h1>Popular Releases</h1>)).to.equal(true);
    });
});

describe('<MovieList/>', () => {
    it('calls componentDidMount', () => {
        const initialState = {
            cinemaApp: {
                movieListState: {
                    movies: []
                }
            }
        };
        const store = mockStore(initialState);
        sinon.spy(MovieListState.prototype, 'componentDidMount');
        const wrapper = mount(<Provider store={store}><MovieListState /></Provider>);
        expect(MovieListState.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});

describe('<Terms />', () => {
    it('should contain static text', () => {
        const wrapper = shallow(<Terms />);
        expect(wrapper.contains(<h1>Terms and Conditions</h1>)).to.equal(true);
    });
});

describe('<About />', () => {
    it('should contain static text', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.contains(<h1>About Us</h1>)).to.equal(true);
    });
});