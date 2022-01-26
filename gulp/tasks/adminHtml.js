import fileInclude from 'gulp-file-include';

export const adminHtml = () => {
  return app.gulp.src(app.path.src.adminHtml)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'ADMIN_HTML',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(fileInclude())
    .pipe(app.gulp.dest(app.path.build.adminHtml))
    .pipe(app.plugins.browsersync.stream());
};