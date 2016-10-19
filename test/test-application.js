import 'babel-polyfill';
import { mount, shallow } from 'enzyme';
import React from 'react';
import {Homepage} from '../src/components/pages/homepage';
import {Terms} from '../src/components/static/terms';
import {About} from '../src/components/static/about';
import { expect } from 'chai';

describe('<Homepage />', () => {
    it('should have popular releases', () => {
        const wrapper = shallow(<Homepage />);
        expect(wrapper.contains(<h1>Popular Releases</h1>)).to.equal(true);
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
        expect(wrapper.contains(<h1>About</h1>)).to.equal(true);
    });
});