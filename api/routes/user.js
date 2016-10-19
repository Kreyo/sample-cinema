var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var sha256 = require('js-sha256');
var ObjectId = require('mongodb').ObjectId;
var jsonParser = bodyParser.json();

router.post('/login', jsonParser, function (req, res) {
    let connection = req.app.locals.connection;
    connection.fetchUserByEmail(req.body.email, (result) => {
        if (result) {
            if ( sha256(req.body.password + result.salt).toLowerCase() == result.password.toLowerCase() ) {

                connection.createSession(result._id,  (sessionResult) => {
                   connection.validateSessionByUser(result._id, (databaseResult) => {
                       res.cookie("sessionID", databaseResult._id);
                       res.cookie("email", result.email);
                       res.sendStatus(200);
                   });
                });
            } else {
                res.sendStatus(401);
            }
        } else {
            res.sendStatus(401);
        }

    });
});

router.post('/register', jsonParser, function (req, res) {
    let connection = req.app.locals.connection;
    connection.fetchUserByEmail(req.body.email, (result) => {
        if (result) {
            res.status(400).send('User already exists!');
        } else {
            connection.insertUser(req.body, (insertResult) => {
                res.sendStatus(200);
            });
        }
    });

});

router.get('/profile', function (req, res) {
    let connection = req.app.locals.connection;
    connection.validateSession(req.cookies.sessionID, (databaseResult) => {
        if (databaseResult) {
            connection.fetchUserByEmail(req.query.email, (result) => {
                res.send(result);
            });
        } else {
            res.clearCookie('sessionID').clearCookie('email').sendStatus(401);
        }
    });
});

router.get('/logout', function(req, res) {
    let connection = req.app.locals.connection;
    connection.removeSession(req.cookies.sessionID, (result) => {
        res.clearCookie('sessionID').clearCookie('email').redirect('/');
    });
});

router.post('/movie-like', jsonParser, function (req, res) {
    let connection = req.app.locals.connection;
    connection.likeMovie(req.body, (result) => {
        res.sendStatus(200);
    });
});

router.post('/movie-unlike', jsonParser, function (req, res) {
    let connection = req.app.locals.connection;
    connection.unlikeMovie(req.body, (result) => {
        res.sendStatus(200);
    });
});

router.get('/user-favorites', function (req, res) {
    let connection = req.app.locals.connection;
    connection.fetchUserByEmail(req.cookies.email, (result) => {

        const favs = result.favorites;
        let modifiedFavs = [];
        for (let key = 0; key < favs.length; key++ ) {
            modifiedFavs.push(ObjectId(favs[key]));
        }

        connection.fetchMoviesByFavorites(modifiedFavs, (movieResult) => {
            res.send(movieResult);
        })
    });
});

module.exports = router;
