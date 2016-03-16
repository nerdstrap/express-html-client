'use strict';

module.exports = function (gulp, plugins) {

	gulp.task('uninstall:bower', function () {
		return gulp.src(plugins.config.paths.bower.install, {read: false})
			.pipe(plugins.rimraf());
	});

	gulp.task('uninstall:bower:cache', function () {
		return gulp.src(plugins.config.paths.bower.cache, {read: false})
			.pipe(plugins.rimraf());
	});

	gulp.task('uninstall:sass:cache', function () {
		return gulp.src(plugins.config.paths.sass.cache, {read: false})
			.pipe(plugins.rimraf());
	});

	gulp.task('uninstall', ['uninstall:bower', 'uninstall:bower:cache', 'uninstall:sass:cache'], function (done) {
		console.log('gulp uninstall done');
		if (done) {
			done();
		}
	});

};
