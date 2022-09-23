const getCssMinimizerPlugin = require('../plugins/css-minimizer-plugin');
const getTerserPlugin = require('../plugins/terser-webpack-plugin');
/**
 * @description Returns optimization webpack object
 * minimizer - minimize js and css
 * splitChunks - move common code of chunks in separate bundle
 * @see https://webpack.js.org/plugins/split-chunks-plugin/
 * @memberOf module:Parts
 * @return {Part}
 */
function getOptimization() {
  return {
    minimizer: [getTerserPlugin(), getCssMinimizerPlugin()],
    moduleIds: 'deterministic',
    splitChunks: {
      automaticNameDelimiter: '~',
      chunks: 'async',
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      minChunks: 1,
      minSize: 30000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  };
}

module.exports = getOptimization;
