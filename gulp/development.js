'use strict';

var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var loadPlugins = require('gulp-load-plugins');
var plugins = loadPlugins({
	DEBUG: false,
	rename: {
		'gulp-ruby-sass': 'sass'
	}
});
plugins.mainBowerFiles = require('main-bower-files');
plugins.config = require(path.join(__dirname, '../config/global.development.json')).gulp;

var taskFiles = fs.readdirSync(path.join(__dirname, plugins.config.paths.tasks));
taskFiles.forEach(function (taskFile) {
	require(path.join(__dirname, plugins.config.paths.tasks + taskFile))(gulp, plugins);
});

gulp.task('development', ['serve:development']);
