let MongoClient = require('mongodb').MongoClient;

/**
 * TODO: Move separate collections functions to separate files!
 */
class Connector {
    constructor (host = 'localhost', port = '27017', database)  {
        this.host = host;
        this.port = port;
        this.database = database;
    }

    /**
     * Connection function to remove extra code
     * @param callback
     */
    connect(callback) {
        MongoClient.connect(
            `mongodb://${this.host}:${this.port}/${this.database}`,
            (err, db) => {
                if (err) {
                    throw err;
                }

                callback(db);
            }
        );
    }

////Movies

    fetchMovies (callback) {
        this.connect((db) => {
            db.collection('movies').find().toArray().then((result) => {
                callback(result);
            });
        });
    }

    fetchMovie (id, callback) {

        this.connect((db) => {
            var ObjectId = require('mongodb').ObjectId;
            db.collection('movies').findOne( { '_id': ObjectId(id) } ).then((result) => {
                callback(result);
            });
        });
    }

////Users

    fetchUserByEmail(email, callback) {

        this.connect((db) => {
            db.collection('users').findOne( { 'email': email } ).then((result) => {
                callback(result);
            });
        });
    }

    insertUser(data, callback) {

        this.connect((db) => {
            let salt = Math.random().toString(36).substring(7);
            var sha256 = require('js-sha256');

            db.collection('users').insertOne(
                {
                    'email': data.email,
                    'salt': salt,
                    'password': sha256(data.password + salt)
                }).then((result) => {

                callback(result);
            });
        });
    }

////Sessions

    createSession(userId, callback) {
        this.connect((db) => {
            db.collection('sessions').insertOne(
                {
                    'userId': userId,
                    'startDate': new Date()
                }
                ).then((result) => {
                    callback(result)
                });
        });
    }

    validateSession(userId, callback) {
        this.connect((db) => {
            var ObjectId = require('mongodb').ObjectId;
            db.collection('sessions').findOne( { 'userId': ObjectId(userId) } ).then((result) => {
                callback(result);
            });
        });
    }

    removeSession(sessionId, callback) {
        this.connect((db) => {
            var ObjectId = require('mongodb').ObjectId;
            db.collection('sessions').deleteOne( { '_id': ObjectId(sessionId) } ).then((result) => {
                callback(result);
            });
        });
    }

////Comments

    addComment(comment, callback) {
        this.connect((db) => {
            db.collection('comments').insertOne( comment ).then((result) => {
                callback(result);
            });
        });
    }

    removeComment(commentId, callback) {
        this.connect((db) => {
            var ObjectId = require('mongodb').ObjectId;
            db.collection('comments').deleteOne( { '_id': ObjectId(commentId) } ).then((result) => {
                callback(result);
            });
        });
    }

    fetchCommentsByMovie(movieId, callback) {
        this.connect((db) => {
            var ObjectId = require('mongodb').ObjectId;
            db.collection('comments').find( { 'movieId': ObjectId(movieId) } ).sort({'date': -1}).toArray().then((result) => {
                callback(result);
            });
        });
    }
}

module.exports = Connector;