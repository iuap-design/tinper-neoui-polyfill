var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

/**
 * build核心代码
 */
gulp.task('build', function() {
	return gulp.src(['./vendor/*.js','!./vendor/respond.js','./js/*.js'])
		.pipe(concat('tinper-neoui-polyfill-core.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename('tinper-neoui-polyfill-core.min.js'))
		.pipe(gulp.dest('./dist'));
});

/**
 * respond响应式代码
 */
gulp.task('respond', function() {
	return gulp.src(['./vendor/respond.js'])
		.pipe(rename('tinper-neoui-polyfill-respond.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename('tinper-neoui-polyfill-respond.min.js'))
		.pipe(gulp.dest('./dist'));
});

/**
 * polyfill代码集成
 */
gulp.task('concat', function() {
	return gulp.src(['./vendor/*.js','./src/*.js'])
		.pipe(concat('tinper-neoui-polyfill.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename('tinper-neoui-polyfill.min.js'))
		.pipe(gulp.dest('./dist'));
});


gulp.task('dist', ['concat']);
