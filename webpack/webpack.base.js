const entryOutput = require('./parts/entry-output');

const getTypeScriptPreset = require('./presets/ts-preset');
const getCssPreset = require('./presets/css-preset');
const getImagesPreset = require('./presets/images-preset');
const getInlinePreset = require('./presets/inline-preset');
const getSVGPreset = require('./presets/svg-preset');

const getBasePlugins = require('./parts/plugins');
const getResolve = require('./parts/resolve');

module.exports = {
  ...entryOutput(),
  devtool: 'cheap-module-source-map',
  module: {
    rules: [getTypeScriptPreset(), getCssPreset(), getImagesPreset(), getInlinePreset(), getSVGPreset()],
  },
  plugins: getBasePlugins(),
  optimization: {
    runtimeChunk: true,
  },
  resolve: getResolve(),
};
