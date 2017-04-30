const gulp = require('gulp');

require('./tasks/backend.gulp');

gulp.task('watch', ['backend'], () => {
  gulp.watch([
    '.src/**/*.js',
  ]);
});

gulp.task('serve', ['backend']);
