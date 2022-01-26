// Импорт основного модуля
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Передача значений в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--production'),
  isDev: !process.argv.includes('--production'),
  path: path,
  gulp: gulp,
  plugins: plugins
};

// Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { adminHtml } from './gulp/tasks/adminHtml.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';

// Наблюдатель
const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.adminHtml, adminHtml);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.fonts, fonts);
};

// Основные задачи
const mainTasks = gulp.parallel(copy, html, adminHtml, scss, js, images, fonts);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

// Экспорт
export { dev };
export { build };
export { server };

// Выполнение сценария по умолчанию
gulp.task('default', dev);