var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var nunjucks = require('nunjucks')

var app = express()

module.export = app;
var port = 1337;
app.set('port', port)

app.use(express.static('views'));

// nunjucks
// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
