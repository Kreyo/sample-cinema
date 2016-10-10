const express = require('express');
const app = express();

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
 * Movie Details actions
 */
let detailsRoutes = require('./routes/details');
app.use('/details', detailsRoutes);

/**
 * User routes actions
 */
let userRoutes = require('./routes/user');
app.use('/user', userRoutes);

app.listen(3000, function () {
    console.log('Super cinema app listening on port 3000!');
});
