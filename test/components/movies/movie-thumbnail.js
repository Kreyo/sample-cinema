import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import {MovieThumbnail} from '../../../src/components/movies/movie-thumbnail';
import { expect } from 'chai';

describe('<MovieThumbnail />', () => {
    it('should have a movie name and an image', () => {

        const date = "2016";
        const name = "Sample movie";
        const id = 11;
        const image = "";

        const wrapper = shallow(<MovieThumbnail date={date} image={image} name={name} id={id} />);
        expect(wrapper.contains(<p>Sample movie</p>)).to.equal(true);
        expect(wrapper.contains(<div className="movie__thumbnail" style = {{backgroundImage: 'url()'}}></div>))
            .to.equal(true);
    });
});
