'use strict';

var path = require('path');
var gulp = require('gulp');

var env = process.env.NODE_ENV || 'development';

var config = require(path.join(__dirname, 'config', 'global.' + env + '.json'));

require(path.join(__dirname, config.gulp.paths.env, env));

gulp.task('default', ['development']);
