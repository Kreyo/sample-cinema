import 'babel-polyfill';
import nock from 'nock';
import { expect } from 'chai';
const request = require('supertest')("http://localhost:3000");

const movie =
    {
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

const comment = {
    body: "I am a comment!",
    movieId : "fake-id"
};

describe("Testing details page API with a mocked backend", function () {
    it("returns a single movie", function (done) {

        nock("http://localhost:3000")
            .get('/api/details/fake-id')
            .reply(200, {
                "movie": movie
            });

        request
            .get('/api/details/fake-id')
            .expect(200)
            .end(function (err, res) {
                expect(res.body.movie).to.be.an('object');

                done();
            });
    });

    it("has an array of comments", function (done) {

        nock("http://localhost:3000")
            .get('/api/details/comments/fake-id')
            .reply(200, {
                "comments": []
            });

        request
            .get('/api/details/comments/fake-id')
            .expect(200)
            .end(function (err, res) {
                expect(res.body.comments).to.be.an('array');

                done();
            });
    });

    it("can have another comment", function (done) {

        nock("http://localhost:3000")
            .post('/api/details/comments', comment)
            .reply(200, {});

        request
            .post('/api/details/comments')
            .send(comment)
            .expect(200, done);
    });

    it("can have a comment removed", function (done) {

        nock("http://localhost:3000")
            .delete('/api/details/comments/comment-id')
            .reply(200, {});

        request
            .delete('/api/details/comments/comment-id')
            .expect(200, done);
    })
});