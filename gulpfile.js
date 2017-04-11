var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
 
gulp.task('sass', function () {
  return gulp.src('./assets/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/css/*.scss', ['sass']);
});
 
gulp.task('js', () => {
    return gulp.src('assets/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js:watch', function () {
  gulp.watch('./assets/js/*.js', ['js']);
});

gulp.task('default', ['sass:watch', 'js:watch']);