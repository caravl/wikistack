var models = require('../models');
var Page = models.Page;
var User = models.User;
const express = require('express')
const router = express.Router();

module.exports = router

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  console.log('req.body: ', req.body);
  var title = req.body.title;
  var content = req.body.content;
  var page = Page.build({
    title : title,
    content : content
  });
  page.save();
  //res.redirect('/');
  console.log(title, page.urlTitle)
  res.json(req.body);
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});
