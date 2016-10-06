var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile('/index.html');
});

router.get('/about', function(req, res) {
    res.send('About page');
});

module.exports = router;
