const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

/**
  Returns head of the graph and where to place results
  @memberOf module:Parts
  @return {{ entry: string, output }}
 */
function getEntryOutput() {
  return {
    entry: path.resolve(__dirname, '../../src', 'index.tsx'),
    output: {
      filename: isProd ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, '../../build'),
      publicPath: '/',
    },
  };
}

module.exports = getEntryOutput;
