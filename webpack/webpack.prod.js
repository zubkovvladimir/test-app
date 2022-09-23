const getOptimization = require('./parts/optimization');

const getImageminPlugin = require('./plugins/imagemin-webpack-plugin');
const getBrotliPlugin = require('./plugins/brotli-plugin');

module.exports = {
  mode: 'production',
  optimization: getOptimization(),
  plugins: [getImageminPlugin(), getBrotliPlugin()],
};
