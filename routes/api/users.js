var express = require('express');
var router = express.Router();
var User = require('../../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.forge({}).fetchAll().then(function(users) {
    res.json(users);
  });
});

router.post('/', function(req, res, next) {
  var user = new User(req.body);
  user.save().then(function(user) {
    res.json(user);
  })
});

module.exports = router;
