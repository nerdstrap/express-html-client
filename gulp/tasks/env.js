'use strict';

module.exports = function (gulp, plugins) {

	gulp.task('env:development', function (done) {
		process.env.NODE_ENV = 'development';
		console.log('gulp env:development done');
		if (done) {
			done();
		}
	});

	gulp.task('env:e2e', function (done) {
		process.env.NODE_ENV = 'e2e';
		if (done) {
			done();
		}
	});

	gulp.task('env:production', function (done) {
		process.env.NODE_ENV = 'production';
		if (done) {
			done();
		}
	});

};
