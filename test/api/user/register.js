import 'babel-polyfill';
import nock from 'nock';
import { expect } from 'chai';
const request = require('supertest')("http://localhost:3000");

const registerData =
{
    email: 'user2@example.com',
    password: 'option123'
};

describe("Testing registration API with a mocked backend", function () {
    it("registers user with correct data", function (done) {

        nock("http://localhost:3000")
            .post('/api/user/register', registerData)
            .reply(200, {});

        request
            .post('/api/user/register')
            .send(registerData)
            .expect(200, done);
    });

    it("returns 400 status if user already exists", function (done) {

        nock("http://localhost:3000")
            .post('/api/user/register', registerData)
            .reply(400, {});

        request
            .post('/api/user/register')
            .send(registerData)
            .expect(400, done)
    });
});
