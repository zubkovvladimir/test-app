const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoader = require('../loaders/css-loader');

const isProd = process.env.NODE_ENV === 'production';

/**
 * Returns a flow for process scss, css input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getCssPreset() {
  const loaders = [];
  loaders.push(isProd ? MiniCssExtractPlugin.loader : 'style-loader');
  loaders.push(...getCssLoader(isProd));

  return {
    test: /\.scss$/,
    use: loaders,
  };
}

module.exports = getCssPreset;
