var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Welcome to index page');
});
router.get('/details', function (req, res, next) {
  res.send('You are at details Route');
});
router.get('/info', function (req, res, next) {
  res.send('You are at info route');
});

router.get('/info/mine', function (req, res, next) {
  res.send('You are at /info/mine');
});
module.exports = router;
