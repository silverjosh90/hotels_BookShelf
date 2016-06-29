var expect = require('chai').expect;
var signup = require('../../unitfunctions/signup')

describe('Signup', function(){
  describe('#validator', function(){
  	it('fails with blank input', function(){
        expect(signup.validator('')).to.be.false
  	});
    it('should return true when given a valid password', function() {
      expect(signup.validator('P@S5w0rD')).to.be.true;
    })
    it('returns false if password is less than 3 chars', function() {
      expect(signup.validator('P5')).to.be.false;
    })
  });
  describe('#signup', function(){
  	it('returns false when passwords do not match', function(){
      var pass1 = 'pass1'
      var pass2 = 'pass2'
      expect(signup.isMatching(pass1,pass2)).to.equal(false)
  	});
  	it('returns true when passwords do match', function(){
      var pass1 = 'pass1'
      var pass2 = 'pass1'
      expect(signup.isMatching(pass1,pass2)).to.equal(true)
  	});
  })
});
