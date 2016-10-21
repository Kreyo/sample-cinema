import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import {MovieComments} from '../../../src/components/movies/movie-comments';
import { expect } from 'chai';

describe('<MovieComments />', () => {
    it('should have a line if there are no comments', () => {
        let comments = [];
        const wrapper = shallow(<MovieComments comments={comments} movieId={"11"} />);
        expect(wrapper.contains(<p>Whoops, looks like no comments here yet. Why not leave one?</p>)).to.equal(true);
    });
});
