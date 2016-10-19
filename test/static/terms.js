import 'babel-polyfill';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import {Terms} from '../../src/components/static/terms';

describe('<Terms />', () => {
    it('should contain static text', () => {
        const wrapper = shallow(<Terms />);
        expect(wrapper.contains(<h1>Terms and Conditions</h1>)).to.equal(true);
    });
});
