const getHtmlWebpackPlugin = require('../plugins/html-webpack-plugin');
const getDotenvPlugin = require('../plugins/dotenv-plugin');
const getMiniCssExtractPlugin = require('../plugins/mini-css-extract-plugin');
const getTsCheckerPlugin = require('../plugins/ts-checker-plugin');
const getContextReplacementPlugin = require('../plugins/context-replacement-plugin');

/**
 @description Returns a list of all connected plugins
 @memberOf module:Parts
 @return {Array}
 */
function getBasePlugins() {
  const plugins = [];
  plugins.push(getHtmlWebpackPlugin());
  plugins.push(getDotenvPlugin());
  plugins.push(getMiniCssExtractPlugin());
  plugins.push(getTsCheckerPlugin());
  plugins.push(getContextReplacementPlugin());

  return plugins;
}

module.exports = getBasePlugins;
