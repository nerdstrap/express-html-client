'use strict';

module.exports = function (gulp, plugins) {

	function notifyLiveReload() {
		plugins.livereload.changed('./css/index.css');
	}

	gulp.task('serve:development', ['env:development', 'build'], function () {
		plugins.nodemon({
			script: 'server.js',
			ext: 'html js',
			env: {
				'NODE_ENV': 'development'
			},
			ignore: [
				'node_modules/',
				'bower_components/',
				'.bower-*',
				'.sass-*',
				'logs/',
				'.DS_Store',
				'**/.DS_Store'
			],
			nodeArgs: ['--debug'],
			stdout: false
		}).on('readable', function () {
			this.stdout.on('data', function (chunk) {
				if (/express-html-client started/.test(chunk)) {
					setTimeout(function () {
						plugins.livereload.reload();
					}, 500);
				}
				process.stdout.write(chunk);
			});
			this.stderr.pipe(process.stderr);
		});

		plugins.livereload.listen({interval: 500});
		gulp.watch(plugins.config.paths.css.build + '/**/*.scss', ['sass']);
		gulp.watch(plugins.config.paths.css.build + '/**/*.css', ['csslint']);
		gulp.watch(plugins.config.paths.libs.build + '/**/*.js', ['jshint']);
	});

};
