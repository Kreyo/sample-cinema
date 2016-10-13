var express = require('express');
var router = express.Router();


router.get('/movie-list', function(req, res) {
    let connection = req.app.get('connection');
    connection.fetchMovies((result) => {
        res.send(result);
    });

});

module.exports = router;
