var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

gulp.task('html', (done)=> {
    gulp.src('./src/index.html')
    	.pipe(gulp.dest('./dist'));
    done();
});

gulp.task('img', (done)=> {
    gulp.src('./src/*.jpg')
        .pipe(gulp.dest('./dist/img'));
        done();
});

gulp.task('js', (done)=> {
    gulp.src('./src/coffee/*.coffee')
    	.pipe(plumber())
    	.pipe(coffee())
    	.pipe(concat('all.min.js'))
    	.pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
        done();
});

gulp.task('watch', (done)=> {
    gulp.watch('./src/coffee/*.coffee', gulp.series('js'));
    done();
});

gulp.task('default', gulp.parallel('html', 'img', 'js', 'watch', function(done) {
	done();
}));