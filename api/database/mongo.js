const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const moviesCollection = 'movies';
const userCollection = 'users';
const sessionCollection = 'sessions';
const commentCollection = 'comments';

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
            db.collection(moviesCollection).find().toArray().then((result) => {
                callback(result);
            });
        });
    }

    fetchMovie (id, callback) {

        this.connect((db) => {

            db.collection(moviesCollection).findOne( { '_id': ObjectId(id) } ).then((result) => {
                callback(result);
            });
        });
    }

    fetchMoviesByFavorites (favorites, callback) {
        this.connect((db) => {
            db.collection(moviesCollection).find( { '_id': {$in : favorites} } ).toArray().then((result) => {
                callback(result);
            });
        });
    }

////Users

    fetchUserByEmail(email, callback) {

        this.connect((db) => {
            db.collection(userCollection).findOne( { 'email': email } ).then((result) => {
                callback(result);
            });
        });
    }

    insertUser(data, callback) {

        this.connect((db) => {
            let salt = Math.random().toString(36).substring(7);
            var sha256 = require('js-sha256');

            db.collection(userCollection).insertOne(
                {
                    'email': data.email,
                    'salt': salt,
                    'password': sha256(data.password + salt)
                }).then((result) => {

                callback(result);
            });
        });
    }

    likeMovie(data, callback) {
        this.connect((db) => {
            db.collection(userCollection).updateOne(
                {
                    'email': data.email,
                },
                {
                    $push: { 'favorites': data.movieId }
                }
            ).then((result) => {
                callback(result);
            });
        });
    }

    unlikeMovie(data, callback) {
        this.connect((db) => {
            db.collection(userCollection).updateOne(
                {
                    'email': data.email,
                },
                {
                    $pull: { 'favorites': data.movieId }
                }
            ).then((result) => {
                callback(result)
            });
        });
    }

////Sessions

    createSession(userId, callback) {
        this.connect((db) => {
            db.collection(sessionCollection).insertOne(
                {
                    'userId': userId,
                    'startDate': new Date()
                }
                ).then((result) => {
                    callback(result)
                });
        });
    }

    validateSessionByUser(userId, callback) {
        this.connect((db) => {

            db.collection(sessionCollection).findOne( { 'userId': ObjectId(userId) } ).then((result) => {
                callback(result);
            });
        });
    }

    validateSession(sessionId, callback) {
        this.connect((db) => {

            db.collection(sessionCollection).findOne( { '_id': ObjectId(sessionId) } ).then((result) => {
                callback(result);
            });
        });
    }

    removeSession(sessionId, callback) {
        this.connect((db) => {

            db.collection(sessionCollection).deleteOne( { '_id': ObjectId(sessionId) } ).then((result) => {
                callback(result);
            });
        });
    }

////Comments

    addComment(comment, callback) {
        this.connect((db) => {
            db.collection(commentCollection).insertOne( comment ).then((result) => {
                callback(result);
            });
        });
    }

    removeComment(commentId, callback) {
        this.connect((db) => {

            db.collection(commentCollection).deleteOne( { '_id': ObjectId(commentId) } ).then((result) => {
                callback(result);
            });
        });
    }

    fetchCommentsByMovie(movieId, callback) {
        this.connect((db) => {

            db.collection(commentCollection).find( { 'movieId': ObjectId(movieId) } )
                .sort({'date': -1}).toArray().then((result) => {
                callback(result);
            });
        });
    }
}

module.exports = Connector;