var expect = require('chai').expect;
var request =require('supertest');
var app = require('../../app');
var User = require('../../models/user');

var user;

beforeEach(function() {
  user = new User();
});

afterEach(function() {
  user.where({email: 'josh@josh.com'}).destroy();
})

describe('On a request to /api/users...', function(){
  describe('get /', function() {
    it('returns a 200', function(done){
      request(app).get('/api/users').expect(200, done);
    });
  });
  describe('post /', function() {
    it('returns a 200', function(done){
      request(app).post('/api/users')
      .send({email: 'josh@josh.com'})
      .expect(200, done);
    });
    it('when posted it adds an entry to DB', function(done){
      var person = {email: 'josh@josh.com', password: 'Ss55'}
      request(app).post('/api/users')
        .send(person)
        .then(function(result){
          request(app).get('/api/users').expect(function(data) {
            expect(data.body.length).to.equal(1);
          }).end(done);
        });
    });
  });
});
