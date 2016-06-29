require('../helper');

var http = require('http'),
    server;


before(function() {
  server = http.createServer(require('../../app'));
  server.listen(5000);
  browser.baseUrl = 'http://localhost:' + server.address().port;
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

after(function(){
  server.close();
});

describe('Given I visit /', function(){
	it('should display a title', function(){
    browser.get('/')
    element(by.id('title')).getText().then(function(text){
      expect(text).to.equal('Welcome To The Hotel List')
    });
  });
  it('should display a sub-title', function() {
    browser.get('/');
    element(by.tagName('h2')).getText().then(function(text) {
      expect(text).to.equal('Use the navigation above to begin');
    });
  });
  it('should have a link to sign in', function() {
    browser.get('/');
    element(by.id('signin')).click();
    browser.getCurrentUrl().then(function(url) {
      var testUrl = url.split(browser.baseUrl)[1];
      expect(testUrl).to.equal('/sign-in');
    });
  });
  it('should have a link to sign up', function() {
    browser.get('/');
    element(by.id('signup')).click();
    browser.getCurrentUrl().then(function(url) {
      var testUrl = url.split(browser.baseUrl)[1];
      expect(testUrl).to.equal('/sign-up');
    });
  });
});
describe('Given I visit /sign-up', function(){
	it('should display a Register title', function(){
    browser.get('/sign-up');
    element(by.id('registerTitle')).getText().then(function(text){
      expect(text).to.equal('Register');
    });
  });
  it('should display a form with a fieldset and legend', function() {
    browser.get('/sign-up');
    element(by.tagName('legend')).getText().then(function(text) {
      expect(text).to.equal('Registration Form');
    });
  });
  it('should take input into the email field', function() {
    browser.get('/sign-up');
    var email = element(by.css('[type="email"]'));
    email.sendKeys('bob@fake.net');
    email.getAttribute('value').then(function(text) {
      expect(text).to.equal('bob@fake.net');
    });
  });
  it('has an input to enter password', function() {
    browser.get('/sign-up');
    var pass = 'password'
    var password = element(by.id('password'));
    password.sendKeys(pass)
    password.getAttribute('value')
      .then(function(val){
        expect(val).to.equal(pass)
      });
  });
  it('has an input to enter a matching password', function() {
    browser.get('/sign-up');
    var superSecret = 'superSecret!@1'
    var matching = element(by.id('matching'));
    matching.sendKeys(superSecret);
    matching.getAttribute('value').then(function(value) {
      expect(value).to.equal(superSecret);
    });
  });
  it('redirects user to /hotels when submit is clicked', function(){
    browser.get('/sign-up')
    var emailAddress='derp@derp.com'
    var pass = 'derper1'
    element(by.css('[type="email"]')).sendKeys(emailAddress)
    element(by.id('password')).sendKeys(pass)
    element(by.id('matching')).sendKeys(pass)
    element(by.css('[type="submit"]')).click()
    browser.getCurrentUrl().then(function(url){
      var url = url.split(browser.baseUrl)[1]
      expect(url).to.equal('/hotels')
    });
  });
  it('the submit button does not submit when any input is missing', function(){
    browser.get('/sign-up')
    var emailAddress='derp@derp.com'
    var pass = 'derper'
    element(by.css('[type="email"]')).sendKeys(emailAddress)
    element(by.id('password')).sendKeys(pass)
    element(by.css('[type="submit"]')).click()
    browser.getCurrentUrl().then(function(url){
      var url = url.split(browser.baseUrl)[1]
      expect(url).to.equal('/sign-up')
    });
  });
  it('if password does not match', function(){
    browser.get('/sign-up')
    var emailAddress='derp@derp.com'
    var pass = 'derper'
    element(by.css('[type="email"]')).sendKeys(emailAddress)
    element(by.id('password')).sendKeys(pass)
    element(by.id('matching')).sendKeys('pass')
    element(by.css('[type="submit"]')).click()
    browser.getCurrentUrl().then(function(url){
      var url = url.split(browser.baseUrl)[1]
      expect(url).to.equal('/sign-up')
    });
  });
});
