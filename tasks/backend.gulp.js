const babel = require('gulp-babel');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('babel', () => gulp.src(['./src/**/*.js']) // your ES2015 code
  .pipe(babel()) // compile new ones
  .pipe(gulp.dest('dist/src')), // write them
);

gulp.task('server-watch', ['babel'], () => nodemon({
  script: 'dist/src/server.js', // run ES5 code
  watch: ['./src'], // watch ES2015 code
  tasks: ['babel'], // compile synchronously onChange
}));

gulp.task('backend', ['server-watch']);
