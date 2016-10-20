import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import {About} from '../../src/components/static/about';

describe('<About />', () => {
    it('should contain static text', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.contains(<h1>About Us</h1>)).to.equal(true);
    });
});
