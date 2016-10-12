var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var sha256 = require('js-sha256');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/ajax-login', urlencodedParser, function (req, res) {
    let connection = req.app.get('connection');
    connection.fetchUserByEmail(req.body.email, (result) => {
        if (result) {
            if ( sha256(req.body.password + result.salt).toLowerCase() == result.password.toLowerCase() ) {

                connection.createSession(result._id,  (sessionResult) => {
                   connection.validateSession(result._id, (databaseResult) => {
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

router.post('/ajax-register', urlencodedParser, function (req, res) {
    let connection = req.app.get('connection');
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

router.get('/logout', function(req, res) {

    let connection = req.app.get('connection');
    connection.removeSession(req.cookies.sessionID, (result) => {
        res.clearCookie('sessionID').clearCookie('email').redirect('/');
    });
});

module.exports = router;
