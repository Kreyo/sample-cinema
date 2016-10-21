const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

app.use(cookieParser());

/**
 * MongoDB config
 */
const databaseHost = 'localhost';
const databasePort = '27017';
const databaseName = 'movies';

const mongo = require('./api/database/mongo');
app.locals.connection = new mongo(databaseHost, databasePort, databaseName);

app.use(express.static(__dirname + '/dist/'));

/**
 * Home page actions
 */
let homeRoutes = require('./api/routes/home');
app.use('/api/home', homeRoutes);

/**
 * Details page actions
 */
let detailsRoutes = require('./api/routes/details');
app.use('/api/details', detailsRoutes);

/**
 * User page actions
 */
let usersRoutes = require('./api/routes/user');
app.use('/api/user', usersRoutes);

/**
 * Fix for socket.io file serving - otherwise it would default to index.html
 */
app.get('/socket.io/socket.io.js', function(req, res) {
    res.sendFile('/socket.io/socket.io.js');
});

app.use(function(req, res) {
    res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

const server = app.listen(3000, function () {
    console.log('Super cinema app listening on port 3000!');
});

/**
 * Socket.io binding for comment sections
 */
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.on('comment:added', function (data) {
        socket.broadcast.emit('comments:updated', data);
    });
    socket.on('comment:removed', function (data) {
        socket.broadcast.emit('comments:updated', data);
    });
});

module.exports = app;