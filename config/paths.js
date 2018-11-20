const path = require('path');

module.exports = {
  resolveSrc: (relativePath = '') => path.resolve(__dirname, '../src/', relativePath),
  resolveRoot: (relativePath = '') => path.resolve(__dirname, '../', relativePath),
};
