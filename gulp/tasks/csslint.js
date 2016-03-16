'use strict';

module.exports = function (gulp, plugins) {

	gulp.task('csslint', function () {
		return gulp.src(plugins.config.paths.css.build + '/**/*.css')
			.pipe(plugins.csslint('.csslintrc'))
			.pipe(plugins.csslint.reporter());
	});

};
