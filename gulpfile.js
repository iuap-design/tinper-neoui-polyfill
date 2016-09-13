var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

/**
 * build核心代码
 */
gulp.task('build', function() {
	return gulp.src(['./vendor/*.js','!./vendor/respond.js','./js/*.js'])
		.pipe(concat('u-polyfill-core.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename('u-polyfill-core.min.js'))
		.pipe(gulp.dest('./dist'));
});

/**
 * respond响应式代码
 */
gulp.task('respond', function() {
	return gulp.src(['./vendor/respond.js'])
		.pipe(rename('u-polyfill-respond.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename('u-polyfill-respond.min.js'))
		.pipe(gulp.dest('./dist'));
});

/**
 * polyfill代码集成
 */
gulp.task('concat', ['build','respond'], function() {
	return gulp.src(['./vendor/*.js','./js/*.js'])
		.pipe(concat('u-polyfill.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename('u-polyfill.min.js'))
		.pipe(gulp.dest('./dist'));
});


gulp.task('dist', ['concat']);