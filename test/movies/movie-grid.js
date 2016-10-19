import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import {MovieGrid} from '../../src/components/movies/movie-grid';
import { expect } from 'chai';

describe('<MovieGrid/>', () => {
    it('has a container div with movies', () => {

        const wrapper = shallow(<MovieGrid movies={[]} />);
        expect(wrapper.contains(<div className="movies"></div>)).to.equal(true);
    });
});
