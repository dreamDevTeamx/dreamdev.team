import path from 'path';

global.__dirname = process.cwd();

const configObject = {
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, 'index.html'),
        design: path.join(__dirname, 'design.html'),
        react_course: path.join(__dirname, 'react-course.html'),
        contacts: path.join(__dirname, 'admin/contacts.html'),
      },
    },
  },
};

export default configObject;
