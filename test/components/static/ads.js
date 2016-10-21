import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import {Ads} from '../../../src/components/static/ads';

describe('<Ads />', () => {
    it('should be surprised', () => {
        const wrapper = shallow(<Ads />);
        expect(wrapper.contains(<p className="about-content">Wow, someone actually clicked on this link. :D</p>))
            .to.equal(true);
    });
});
