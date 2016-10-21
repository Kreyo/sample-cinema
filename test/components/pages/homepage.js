import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import {Homepage} from '../../../src/components/pages/homepage';
import { expect } from 'chai';

describe('<Homepage />', () => {
    it('should have popular releases', () => {
        const wrapper = shallow(<Homepage />);
        expect(wrapper.contains(<h1>Popular Releases</h1>)).to.equal(true);
    });
});
