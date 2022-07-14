import path from 'path';
import fs from 'fs';

global.__dirname = process.cwd();

const configObject = {
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, 'index.html'),
        admin: path.join(__dirname, 'admin/index.html'),
      },
    },
  },
};

export default configObject;
