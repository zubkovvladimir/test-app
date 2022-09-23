const path = require('path');

/**
 * @description This is a part of config says how modules resolves.
 * First part of aliases is project aliases. Second one - is for package resolving.
 * @memberOf module:Parts
 * @return {Part}
 */
function getResolve() {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      api: path.resolve(__dirname, '../../src/api'),
      assets: path.resolve(__dirname, '../../src/assets'),
      components: path.resolve(__dirname, '../../src/components'),
      constants: path.resolve(__dirname, '../../src/constants'),
      hocs: path.resolve(__dirname, '../../src/hocs'),
      hooks: path.resolve(__dirname, '../../src/hooks'),
      interfaces: path.resolve(__dirname, '../../src/interfaces'),
      layouts: path.resolve(__dirname, '../../src/layouts'),
      pages: path.resolve(__dirname, '../../src/pages'),
      routes: path.resolve(__dirname, '../../src/routes'),
      store: path.resolve(__dirname, '../../src/store'),
      utils: path.resolve(__dirname, '../../src/utils'),
    },
  };
}

module.exports = getResolve;
