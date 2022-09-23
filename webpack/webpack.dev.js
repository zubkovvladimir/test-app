const getDevServer = require('./parts/dev-server');
const getEslintPlugin = require('./plugins/eslint-plugin');

module.exports = {
  mode: 'development',
  devServer: getDevServer(),
  plugins: [
    getEslintPlugin(),
  ],
};
