'use strict';

if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development';
}

var path = require('path');
var express = require('express');
var engine = require('ejs-mate');
var nconf = require('nconf');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

nconf.argv().env();
nconf.file({file: path.join(__dirname, 'config', 'global.' + process.env.NODE_ENV + '.json')});

var app = express();
app.engine('ejs', engine);
app.set('view engine', nconf.get('server:viewEngine'));

app.use(favicon(__dirname + '/img/favicon.ico'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/libs', express.static(__dirname + '/libs'));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

var pageLocals = {
	title: 'title',
	description: 'description',
	author: 'mbaltic'
};
app.get('/', function (req, res, next) {
	res.render('index', {
		title: pageLocals.title,
		description: pageLocals.description,
		author: pageLocals.author,
		livereloadSrc: '//' + req.hostname + ':35729/livereload.js'
	});
});
app.get('/sortable', function (req, res, next) {
	res.render('sortable', {
		title: pageLocals.title,
		description: pageLocals.description,
		author: pageLocals.author,
		livereloadSrc: '//' + req.hostname + ':35729/livereload.js'
	});
});

var port = process.env.PORT || nconf.get('server:port');
var server = app.listen(port, function () {
	console.log('express-html-client started and listening on port: %s', port);
});
