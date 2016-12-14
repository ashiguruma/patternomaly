import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json');

export default {
  entry: 'index.js',
  plugins: [
    babel(babelrc())
  ],
  external: Object.keys(pkg.dependencies),
  targets: [
    {
      dest: pkg['main'],
      format: 'umd',
      moduleName: 'pattern',
      sourceMap: true
    },
    {
      dest: pkg['jsnext:main'],
      format: 'es',
      sourceMap: true
    }
  ]
};
