const ESLintPlugin = require('eslint-webpack-plugin');

/**
 * @description A ESLint plugin for webpack
 * @memberOf module:Plugins
 * @return {ESLintPlugin}
 * @see https://www.npmjs.com/package/eslint-webpack-plugin
 */
function getEslintPlugin() {
  return new ESLintPlugin({
    quiet: true,
  });
}

module.exports = getEslintPlugin;
