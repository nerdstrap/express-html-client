'use strict';

module.exports = function (gulp, plugins) {

	gulp.task('clean:fonts', function () {
		return gulp.src(plugins.config.paths.fonts.install, {read: false})
			.pipe(plugins.rimraf());
	});

	gulp.task('clean:css:bower', function () {
		return gulp.src(plugins.config.paths.css.install, {read: false})
			.pipe(plugins.rimraf());
	});

	gulp.task('clean:css', ['clean:css:bower'], function () {
		return gulp.src([
				plugins.config.paths.css.build + '/**.css',
				plugins.config.paths.css.maps
			], {read: false})
			.pipe(plugins.rimraf());
	});

	gulp.task('clean:libs', function () {
		return gulp.src(plugins.config.paths.libs.install, {read: false})
			.pipe(plugins.rimraf());
	});

	gulp.task('clean', ['clean:fonts', 'clean:css', 'clean:libs'], function (done) {
		console.log('gulp clean done');
		if (done) {
			done();
		}
	});

};
