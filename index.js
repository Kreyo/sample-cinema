const express = require('express');
const app = express();
var path = require('path');

/**
 * MongoDB config
 */
const databaseHost = 'localhost';
const databasePort = '27017';
const databaseName = 'movies';

var mongo = require('./database/mongo');
var connection = new mongo(databaseHost, databasePort, databaseName);

app.set('connection', connection);

app.use(express.static(__dirname + '/views'));

/**
 * Home page actions
 */
let homeRoutes = require('./routes/home');
app.use('', homeRoutes);

/**
 * Home page actions
 */
let detailsRoutes = require('./routes/details');
app.use('', detailsRoutes);

app.use(function(req, res) {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
});


app.listen(3000, function () {
    console.log('Super cinema app listening on port 3000!');
});
