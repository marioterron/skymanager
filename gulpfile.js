const gulp 					= require('gulp');
const sass 					= require('gulp-sass');
const connect 			= require('gulp-connect');

gulp.task('styles', function () {
  gulp.src('./client/src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/dist/css/'))
});

gulp.task('watch', function () {
  gulp.watch(['./client/src/scss/*.scss'], ['styles']);
});

gulp.task('default', ['watch']);
