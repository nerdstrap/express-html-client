'use strict';

module.exports = function (gulp, plugins) {

	gulp.task('watch', function () {
		plugins.livereload.listen({interval: 500});
		gulp.watch(plugins.config.paths.build.css + '/**/*.scss', ['sass']);
		gulp.watch(plugins.config.paths.build.css + '/**/*.css', ['csslint']);
		gulp.watch(plugins.config.paths.build.libs + '/**/*.js', ['jshint']);
	});

};
