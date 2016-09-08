var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
var jshint = require('gulp-jshint');

var Server = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('templates', function(){
	return gulp.src([
    '!client/src/core/tools/**/*.html',
    'client/src/**/*.html'
  ])
	.pipe(templateCache('templates.module.js', {
		module: 'ska.templates',
		standalone: true
	}))
	.pipe(gulp.dest('client/src/layout'));
});

gulp.task('js', function () {
	gulp.src([
    '!client/src/**/*.spec.js',
    '!client/src/core/tools/**/*.js',
		'client/src/**/*.module.js',
		'client/src/**/*.js'])
	.pipe(sourcemaps.init())
		.pipe(concat('app.min.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('client/dist'));
});

gulp.task('lint', function(){
	return gulp.src(['!client/src/core/tools/**/*.js','client/src/**/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('vendor', function(){
	return gulp.src([
    'client/vendor/node_modules/angular/angular.min.js',
    'client/vendor/node_modules/angular-route/angular-route.min.js',
    'client/vendor/node_modules/jquery/dist/jquery.min.js',
    'client/vendor/node_modules/bootstrap/js/bootstrap.min.js',
    'client/vendor/node_modules/moment/min/moment.min.js',
    'client/vendor/toastr/toastr.js',
    'client/vendor/toastr/toastr.js',

  ])
	.pipe(concat('vendor.min.js'))
	.pipe(gulp.dest('client/dist'));
});

gulp.task('vendor.css', function(){
	return gulp.src([
    // Vendor css - eg. bootstrap.min.css
    // 'client/vendor/bootstrap/bootstrap.theme.css',
    // 'client/vendor/bootstrap/bootstrap.palette.css',
    // 'client/vendor/material-icons/material-icons.css',
    // 'client/vendor/fonts/lato-fonts.css',
    'client/vendor/toastr/toastr.css',
	])
	.pipe(concat('vendor.min.css'))
	.pipe(gulp.dest('client/dist'));
});

gulp.task('css', function(){
	return gulp.src([
		'client/src/layout/layout.css',
		'client/src/**/*.css'
	])
	.pipe(concat('app.min.css'))
	.pipe(gulp.dest('client/dist'));
});

gulp.task('watch', function () {
	gulp.watch('client/src/**/*.html',['templates']);
	gulp.watch('client/src/**/*.js', ['js']);
	gulp.watch('client/src/**/*.css', ['css']);
});
