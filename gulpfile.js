var gulp = require('gulp');
var concat = require('gulp-concat');
var minCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var filever = require('gulp-version-filename');
var s3 = require("gulp-s3-ls");
var rename = require("gulp-rename");



gulp.task('concat', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.css'])
        .pipe(concat('common.css'))
        .pipe(gulp.dest('dist/css/'));

});

gulp.task('minCSS', ['concat'], function () {
    return gulp.src('dist/css/common.css')
        .pipe(minCss({
            keepBrakes: true
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['minCSS'], function () {
    
});