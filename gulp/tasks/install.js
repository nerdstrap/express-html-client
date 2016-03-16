'use strict';

module.exports = function (gulp, plugins) {

	gulp.task('install:bower', function () {
		return plugins.bower()
			.pipe(gulp.dest(plugins.config.paths.bower.install));
	});

	gulp.task('install:bower:css', ['install:bower'], function () {
		var stream = gulp.src(plugins.mainBowerFiles(['**/*.css', '**/*.png', '**/*.jpg']), {
				base: plugins.config.paths.bower.install
			})
			.pipe(plugins.flatten({includeParents: 1}))
			.pipe(gulp.dest(plugins.config.paths.css.install));
		return stream;
	});

	gulp.task('install:bower:libs', ['install:bower'], function () {
		var stream = gulp.src(plugins.mainBowerFiles('**/*.js'), {
				base: plugins.config.paths.bower.install
			})
			.pipe(plugins.flatten({includeParents: 1}))
			.pipe(gulp.dest(plugins.config.paths.libs.install));
		return stream;
	});

	gulp.task('install:bower:fonts:font-awesome', ['install:bower'], function () {
		var stream = gulp.src(plugins.config.paths.fonts.font_awesome + '/fonts/**/**.*')
			.pipe(gulp.dest(plugins.config.paths.fonts.install));
		return stream;
	});

	gulp.task('install:bower:fonts:bootstrap', ['install:bower'], function () {
		var stream = gulp.src(plugins.config.paths.fonts.bootstrap + '/fonts/**/**.*')
			.pipe(gulp.dest(plugins.config.paths.fonts.install));
		return stream;
	});

	gulp.task('install:bower:fonts', ['install:bower:fonts:font-awesome', 'install:bower:fonts:bootstrap']);

	gulp.task('install', ['install:bower:fonts', 'install:bower:css', 'install:bower:libs'], function (done) {
		console.log('gulp install done');
		if (done) {
			done();
		}
	});

};
