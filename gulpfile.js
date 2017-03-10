var gulp = require('gulp'),
    path = require('path'),
    fs = require('fs'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    cleanCss = require('gulp-clean-css');

/**
 * Compile app less for the first time
 */
gulp.task('compile', function() {
    return gulp.src('assets/css/all.less')
               .pipe(less({
                   path: [path.join(__dirname, 'less', 'includes')]
               }))
               .pipe(cleanCss({compatibility: 'ie8'}))
               .pipe(gulp.dest('assets/css'));
});

/**
 * Watch less file and recompile when changed
 */
gulp.task('watch', ['compile'], function() {
    gulp.watch('assets/css/*.less', ['compile'])
})