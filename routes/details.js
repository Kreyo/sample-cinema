var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/movie-ajax/:id', function(req, res) {
    let id = req.params.id;
    let connection = req.app.get('connection');
    connection.fetchMovie(id, (result) => {
        res.send(result);
    });
});

router.get('/ajax-comments/:id', function (req, res) {
    let id = req.params.id;
    let connection = req.app.get('connection');
    connection.fetchCommentsByMovie(id, (result) => {
        res.send(result);
    });
});

router.post('/ajax-comment', urlencodedParser, function (req, res) {
    let connection = req.app.get('connection');
    let ObjectId = require('mongodb').ObjectId;
    let comment = {
        'body': req.body.body,
        'user': req.cookies.email,
        'movieID': ObjectId(req.body.movieId),
        'date': new Date()
    };

    connection.addComment(comment, (result) => {
        res.send(result);
    });
});

module.exports = router;