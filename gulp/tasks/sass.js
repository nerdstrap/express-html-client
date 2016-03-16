'use strict';

module.exports = function (gulp, plugins) {

	gulp.task('sass', function () {
		return plugins.sass(plugins.config.paths.css.build + '/**/*.scss', {
				sourcemap: true,
				style: 'nested',
				loadPath: plugins.config.paths.sass.loadPath
			})
			.on('error', plugins.sass.logError)
			.pipe(plugins.sourcemaps.write('maps', {
				includeContent: false,
				sourceRoot: 'source'
			}))
			.pipe(gulp.dest(plugins.config.paths.css.build))
			.pipe(plugins.livereload());
	});

};
