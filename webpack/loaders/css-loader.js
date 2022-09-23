/**
 * Returns a css-loader. It parses css
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/css-loader
 */
function getCssLoader(isProd) {
  return [
    {
      loader: 'css-loader',
      options: {
        sourceMap: !isProd,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: !isProd,
      },
    },
  ];
}

module.exports = getCssLoader;
