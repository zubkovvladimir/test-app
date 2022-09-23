const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/**
 * @description Returns a CssMinimizer plugin which optimize an minify css output
 * @memberOf module:Plugins
 * @return {CssnanoPlugin}
 * @see https://www.npmjs.com/package/css-minimizer-webpack-plugin
 */
function getCssMinimizerPlugin() {
  return new CssMinimizerPlugin();
}

module.exports = getCssMinimizerPlugin;
