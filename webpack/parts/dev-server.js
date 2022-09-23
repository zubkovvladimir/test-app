/**
 * @description Returns a config for development server
 * @memberOf module:Parts
 * @return {Part}
 */
function getDevServer() {
  return {
    historyApiFallback: true,
    host: 'localhost',
    port: 3333,
    hot: true,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  };
}

module.exports = getDevServer;
