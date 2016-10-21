import 'babel-polyfill';
import nock from 'nock';
import { expect } from 'chai';
const request = require('supertest')("http://localhost:3000");

const loginData =
    {
        email: 'user@example.com',
        password: 'option123'
    };

const wrongData =
    {
        email: 'user@example.com',
        password: 'option124'
    };

describe("Testing login API with a mocked backend", function () {
    it("logs in user with correct data", function (done) {

        nock("http://localhost:3000")
            .post('/api/user/login', loginData)
            .reply(200, {});

        request
            .post('/api/user/login')
            .send(loginData)
            .expect(200, done);
    });

    it("returns 401 status for incorrect login data", function (done) {

        nock("http://localhost:3000")
            .post('/api/user/login', wrongData)
            .reply(401, {});

        request
            .post('/api/user/login')
            .send(wrongData)
            .expect(401, done)
    });
});
