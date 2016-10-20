import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import {Details} from '../../src/components/pages/details';
import { expect } from 'chai';

describe('<Details />', () => {
    it('should have a movie name', () => {
        const movie = {
            "Title" : "The Lord of the Rings: The Fellowship of the Ring",
            "Year" : "2001",
            "Rated" : "PG-13",
            "Released" : "19 Dec 2001",
            "Runtime" : "178 min",
            "Genre" : "Action, Adventure, Drama",
            "Director" : "Peter Jackson",
            "Writer" : "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
            "Actors" : "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
            "Plot" : "A meek Hobbit and eight companions set out on a journey to destroy the One Ring and the Dark Lord Sauron.",
            "Language" : "English, Sindarin",
            "Country" : "New Zealand, USA",
            "Awards" : "Won 4 Oscars. Another 108 wins & 122 nominations.",
            "Poster" : "http://ia.media-imdb.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SX300.jpg",
            "Metascore" : "92",
            "imdbRating" : "8.8",
            "imdbVotes" : "1,229,475",
            "imdbID" : "tt0120737",
            "Type" : "movie",
            "Response" : "True"
        };

        const params = {
            movieId: 1
        };

        const wrapper = shallow(<Details movie={movie} favorite={false} setMovie={() => {}} setFavorite={() => {}} params={params} />);
        expect(wrapper.contains(`The Lord of the Rings: The Fellowship of the Ring`)).to.equal(true);
    });
});
