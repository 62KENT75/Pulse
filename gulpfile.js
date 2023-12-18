const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: "dist"
    }
  });

  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src("src/sass/**/*.+(scss|sass)") // путь к вашим исходным файлам Sass
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // путь, куда сохранять скомпилированные CSS файлы
});

gulp.task('watch', function () {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.series('sass'));
  gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.task('html', function() {
  return gulp.src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"))
});

gulp.task('scripts', function() {
  return gulp.src("src/js/**/*.js")
    .pipe(gulp.dest("dist/js"))
});

gulp.task('fonts', function() {
  return gulp.src("src/fonts/**/*")
    .pipe(gulp.dest("dist/fonts"))
});

gulp.task('icons', function() {
  return gulp.src("src/icons/**/*")
    .pipe(gulp.dest("dist/icons"))
});

gulp.task('mailer', function() {
  return gulp.src("src/mailer/**/*")
    .pipe(gulp.dest("dist/,ailer"))
});

gulp.task('images', function() {
  return gulp.src("src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
});

gulp.watch('default', gulp.parallel('watch', 'server', 'sass', 'scripts', 'fonts', 'icons', 'mailer', 'html', 'images'))