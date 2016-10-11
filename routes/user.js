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
                //TODO: Secure session!
                res.cookie("sessionID", result._id);
                res.cookie("email", result.email);
                res.sendStatus(200);
            } else {
                res.sendStatus(401);
            }
        } else {
            res.sendStatus(401);
        }

    });
});

module.exports = router;
