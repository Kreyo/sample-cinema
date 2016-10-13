var express = require('express');
var router = express.Router();


router.get('/movie-list', function(req, res) {
    let connection = req.app.locals.connection;
    connection.fetchMovies((result) => {
        res.send(result);
    });

});

module.exports = router;
