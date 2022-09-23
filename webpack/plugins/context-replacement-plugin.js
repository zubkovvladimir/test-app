const webpack = require('webpack');
/**
 * @description Returns a context replacement plugin. It cuts momentjs locales out.
 * @memberOf module:Plugins
 * @return {ContextReplacementPlugin}
 * @see https://webpack.js.org/plugins/context-replacement-plugin/
 */
function getContextReplacementPlugin() {
  return new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru|en|/);
}

module.exports = getContextReplacementPlugin;
