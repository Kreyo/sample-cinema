var express = require('express');
var router = express.Router();

router.get('/movie-ajax/:id', function(req, res) {
    let id = req.params.id;
    let connection = req.app.get('connection');
    connection.fetchMovie(id, (result) => {
        res.send(result);
    });
});

module.exports = router;