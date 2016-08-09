var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');

gulp.task('webpack', function() {
	return gulp.src('./js/core.js')
		.pipe(webpack({
			module:{
				loaders:[
					{
						test: /(\.jsx|\.js)$/,
						loader: 'babel',
						exclude: /(node_modules|bower_components)/ 
					}
				]				
			},
			output:{
				filename:'core.js',
				libraryTarget:'umd',
				umdNamedDefine: true
			},
			resolve:{
				extensions: ['','.js','.jsx']
			}
		}))
		.pipe(gulp.dest('./lib'))
});

gulp.task('build', ['webpack'], function() {
	return gulp.src(['./vendor/*.js','./lib/*.js'])
		.pipe(concat('neoui-polyfill.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename('neoui-polyfill.min.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('dist', ['build']);