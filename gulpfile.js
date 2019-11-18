var gulp = require('gulp');
var sass = require('gulp-sass');
var browsersync = require('browser-sync').create();


gulp.task('sass', function(done) {
	return (
		gulp
			.src('./css/styles.scss')
			.pipe(sass())
			.pipe(gulp.dest('./css'))
	);
    gulp.task('browser-reload')
	done();
});

gulp.task('build-server', function (done) {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });
    done();
    console.log('Server was launched');
});

// ブラウザのリロード
gulp.task('browser-reload', function (done){
    browsersync.reload();
    done();
    console.log('Browser reload completed');
});

// 監視ファイル
gulp.task('watch-files', function(done) {
    gulp.watch("./*.html", gulp.task('browser-reload'));
    gulp.watch("./*/*.css", gulp.task('browser-reload'));
    gulp.watch("./*/*.js", gulp.task('browser-reload'));
    gulp.watch("./*/*.scss", gulp.task('sass'));
    done();
    console.log(('gulp watch started'));
});

// タスクの実行
gulp.task('default', gulp.series('build-server', 'watch-files', function(done){
    done();
    console.log('Default all task done!');
}));