const path = require('path');

module.exports = {
  entry: './js/script.js',

  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
  },
};
