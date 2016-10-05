let MongoClient = require('mongodb').MongoClient;

class Connector {
    constructor (host = 'localhost', port = '27017', database)  {
        this.host = host;
        this.port = port;
        this.database = database;

        MongoClient.connect(
            `mongodb://${host}:${port}/${database}`,
            (err, db) => {
                if (err) {
                    throw err;
                }
            }
        );
    }

    fetchMovies () {
        MongoClient.connect(
            `mongodb://${this.host}:${this.port}/${this.database}`,
            (err, db) => {
                if (err) {
                    throw err;
                }

                db.collection('movies').find().toArray((err, result) => {
                    if (err) {
                        throw err;
                    }
                    console.log(result);
                });

            }
        );
    }
}

module.exports = Connector;

