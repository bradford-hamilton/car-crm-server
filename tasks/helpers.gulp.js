const gutil = require('gulp-util');

module.exports = {
  isDev() {
    return !process.env.NODE_DEV ||
      process.env.NODE_DEV === 'development';
  },

  error(task, msg) {
    throw new gutil.PluginError(task,
      `${gutil.colors.bgRed(task, `ERROR: ${msg}`)}\n\n`,
    );
  },

  success(msg) {
    gutil.log(gutil.colors.green(`SUCCESS ---> ${msg}`));
  },

  info(msg) {
    gutil.log(gutil.colors.blue('INFO ---> ', `${msg}...`));
  },

  catchError(err) {
    console.log(gutil.colors.bgRed(`ERROR: ${err}`));
    this.emit('end');
  },
};
