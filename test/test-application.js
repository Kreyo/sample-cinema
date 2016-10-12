var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('Movies', function() {
    it('should list ALL movies on / GET');
    it('should list a SINGLE movie on /movie/<id> GET');
});


it('should list ALL movies on / GET', function(done) {
    chai.request(server)
        .get('/ ')
        .end(function(err, res){
            res.should.have.status(200);
            done();
        });
});
