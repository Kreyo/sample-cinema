import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import {MovieComment} from '../../src/components/movies/movie-comment';
import { expect } from 'chai';

describe('<MovieComment />', () => {
    it('should have sample This is a comment text', () => {
        let comment = {
            "body" : "This is a comment",
            "user" : "user@example.com",
            "date" : new Date()
        };

        const wrapper = shallow(<MovieComment comment={comment} />);
        expect(wrapper.contains(<p>This is a comment</p>)).to.equal(true);
    });
});
