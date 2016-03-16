'use strict';

module.exports = function (gulp, plugins) {

	gulp.task('jshint', function () {
		return gulp.src([
				plugins.config.paths.libs.build + '/**/*.js'
			])
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter('jshint-stylish'));
	});

};
