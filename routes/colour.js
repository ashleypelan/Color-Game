var library = require('../src/lib.js');
var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI || 'localhost/colorBlend');
var colorBlendDB = db.get('colorBlendInfo');

router.get('/', function(req, res, next) {
  colorBlendDB.find({}, function (err, records) {
  res.render('index', {colorBlendDB: records});
  });
});

router.get('/createAccount', function(req, res, next) {
  res.render('createAccount');
});

router.post('/', function(req, res, next) {
  var errorArray = library.verification(req,body.name, req.body.email, req.body.password);
  if (errorArray.length > 0) {
    colorBlendDB.insert({ name: req.body.name,
                          email: req.body.email,
                          password: req.body.password
                       });
    res.render('createAccount');
  } else {
    res.redirect('/', {errorArray: errorArray});
  }
});

router.get('/levelOne', function(req, res, next) {
  res.render('levelOne');
});

router.get('/levelTwo', function(req, res, next) {
  res.render('levelTwo');
});

router.get('levelThree', function(req, res, next) {
  res.render('levelThree');
});

router.get('levelFour', function(req, res, next) {
  res.render('levelFour');
});

router.get('levelFive', function(req, res, next) {
  res.render('levelFive');
});

module.exports = router;
