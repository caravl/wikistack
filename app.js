var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var nunjucks = require('nunjucks')
var models = require('./models')
var routes = require('./routes')

var app = express()

module.export = app;

// var Sequelize = require('sequelize');
// var db = new Sequelize('postgres://localhost:5432/wikistack', {
//   logging: false
// })

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);


models.User.sync()
.then(function () {
  return models.Page.sync()
})
.then(function () {
  app.listen(3000, function() {
    console.log('listening on port 3000')
  })
})
.catch(console.error)

// models.db.sync({})
// .then(function () {
//   app.listen(3000, function() {
//     console.log('listening on port 3000')
//   })
// })
// .catch(console.error)
