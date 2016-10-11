let MongoClient = require('mongodb').MongoClient;

class Connector {
    constructor (host = 'localhost', port = '27017', database)  {
        this.host = host;
        this.port = port;
        this.database = database;

        MongoClient.connect(
            `mongodb://${this.host}:${this.port}/${this.database}`,
            (err, db) => {
                if (err) {
                    throw err;
                }
            }
        );

    }

    fetchMovies (callback) {
         MongoClient.connect(
            `mongodb://${this.host}:${this.port}/${this.database}`,
            (err, db) => {
                if (err) {
                    throw err;
                }

               db.collection('movies').find().toArray().then((result) => {
                   callback(result);
                });
            }
        );
    }

    fetchMovie (id, callback) {
        MongoClient.connect(
            `mongodb://${this.host}:${this.port}/${this.database}`,
            (err, db) => {
                if (err) {
                    throw err;
                }

                var ObjectId = require('mongodb').ObjectId;
                db.collection('movies').findOne( { '_id': ObjectId(id) } ).then((result) => {
                    callback(result);
                });
            }
        );
    }

    fetchUserByEmail(email, callback) {
        MongoClient.connect(
            `mongodb://${this.host}:${this.port}/${this.database}`,
            (err, db) => {
                if (err) {
                    throw err;
                }

                var ObjectId = require('mongodb').ObjectId;
                db.collection('users').findOne( { 'email': email } ).then((result) => {
                    callback(result);
                });
            }
        );
    }
}

module.exports = Connector;