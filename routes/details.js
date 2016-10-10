var express = require('express');
var router = express.Router();

router.get('/ajax/:id', function(req, res) {
    let id = req.params.id;
    let connection = req.app.get('connection');
    connection.fetchMovie(id, (result) => {
        res.send(result);
    });
});

router.get('/:id', function(req, res) {
    res.sendFile('/view.html');
});

module.exports = router;