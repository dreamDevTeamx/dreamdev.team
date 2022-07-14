import path from 'path';
import fs from 'fs';

global.__dirname = process.cwd();

const configObject = {
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, 'index.html'),
        contacts: path.join(__dirname, 'admin/contacts.html'),
      },
    },
  },
};

export default configObject;
