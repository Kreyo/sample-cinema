var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectId;

var jsonParser = bodyParser.json();

router.get('/:id', function(req, res) {
    let id = req.params.id;
    let connection = req.app.locals.connection;
    connection.fetchMovie(id, (result) => {
        res.send(result);
    });
});

router.get('/comments/:id', function (req, res) {
    let id = req.params.id;
    let connection = req.app.locals.connection;
    connection.fetchCommentsByMovie(id, (result) => {
        res.send(result);
    });
});

router.post('/comments', jsonParser, function (req, res) {
    let connection = req.app.locals.connection;
    let comment = {
        'body': req.body.body,
        'user': req.cookies.email,
        'movieId': ObjectId(req.body.movieId),
        'date': new Date()
    };

    connection.addComment(comment, (result) => {
        res.send(result);
    });
});

module.exports = router;