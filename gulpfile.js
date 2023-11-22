const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass') // путь к вашим исходным файлам Sass
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css')); // путь, куда сохранять скомпилированные CSS файлы
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.sass', gulp.series('sass'));
});