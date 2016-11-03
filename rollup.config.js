import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

let pkg = require('./package.json');

export default {
  entry: 'index.js',
  dest: 'dist/patterns.js',
  format: 'umd',
  moduleName: 'pattern',
  sourceMap: true,
  plugins: [
    babel(babelrc())
  ],
  external: Object.keys(pkg.dependencies)
};
