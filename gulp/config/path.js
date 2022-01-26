import * as nodePath from 'path';

// Получаем имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './public'; // Можно компилить прямо в корень, но лучше в отдельную папку
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`
  },
  src: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{png,jpg,jpeg,gif,webp,JPG,PNG}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/**/[^_]*.scss`,
    html: `${srcFolder}/**/[^_]*.html`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{png,jpg,jpeg,gif,svg,webp,JPG,PNG}`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}