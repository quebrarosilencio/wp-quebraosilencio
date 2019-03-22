// Require gulpfile configuration file
const conf = require('./config/.config.json');

// Require necessary packages for transpiling files
const babel = require('gulp-babel'),
      browserSync = require('browser-sync'),
      gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      bless = require('gulp-bless'),
      changed = require('gulp-changed'),
      concat = require('gulp-concat'),
      cssnano = require('gulp-cssnano'),
      imagemin = require('gulp-imagemin'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      wait = require('gulp-wait'),
      gulpIf = require("gulp-if"),
      spriteSmith = require('gulp.spritesmith'),
      watch = require('gulp-watch');

// Custom tasks for individual extensions
gulp.task('php', () => {
  return gulp.src([conf.dev.php])
    .pipe(changed(conf.build.php, { extension: 'php' }))
    .pipe(gulp.dest(conf.destination));
});

gulp.task('css', () => {
  return gulp.src([conf.dev.css])
    .pipe(wait(200))
    .pipe(changed(conf.build.css, { extension: 'css' }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(bless())
    .pipe(cssnano())
    .pipe(gulp.dest(conf.destination + '/css'));
});

gulp.task('js', () => {
  return gulp.src([conf.dev.js])
    .pipe(changed(conf.build.js, { extension: 'js' }))
    //.pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(conf.destination + '/js'));
});

gulp.task('img', () => {
  return gulp.src([conf.dev.img])
    .pipe(imagemin())
    .pipe(gulp.dest(conf.destination + '/img'));
});

//Sprite Image
gulp.task('sprite', function () {
	var spriteData = gulp.src(conf.dev.sprite)
	.pipe(spriteSmith({
    imgName: 'sprite.png',
		cssName: 'sprite.css',
		imgPath: '../img/sprite.png',
		padding: 20

  }));
	return spriteData
		.pipe(gulpIf('*.png', gulp.dest(conf.destination + '/img')))
		.pipe(gulpIf('*.css', gulp.dest(conf.destination + '/css')));
});

// Compile fonts on theme folder
gulp.task('fonts', () => {
  return gulp.src([conf.dev.fonts])
    .pipe(gulp.dest(conf.destination + '/fonts'));
});


gulp.task('base', () => {
  return gulp.src(['source/style.css'])
    .pipe(gulp.dest('../wp-content/themes/eduardotema'));
});

gulp.task('watch', () => {
  var base = gulp.watch([conf.dev.php], ['php']);
  var css = gulp.watch([conf.dev.css], ['css']);
  var js = gulp.watch([conf.dev.js], ['js']);
  var fonts = gulp.watch([conf.dev.fonts], ['fonts']);
  var img = gulp.watch([conf.dev.img], ['img']);
});

gulp.task('browser-sync', () => {
  browserSync.init([conf.destination], {
		proxy: conf.bs.proxy,
		browser: conf.bs.browser,
		port: conf.bs.port,
		injectChanges: true,
		notify: true,
    reloadOnRestart: true,
    reloadDebounce: 100
  });
});

// Group tasks
gulp.task('dev', ['base', 'php', 'css', 'js', 'img', 'sprite', 'fonts','watch', 'browser-sync']);
gulp.task('build', ['base', 'php', 'css', 'js', 'img', 'sprite', 'fonts']);