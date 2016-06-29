var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sign-up', function(req, res, next) {
  res.render('signing/signup');
});

module.exports = router;
