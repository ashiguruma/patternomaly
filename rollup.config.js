import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  dest: 'dist/patterns.js',
  format: 'umd',
  moduleName: 'pattern',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
