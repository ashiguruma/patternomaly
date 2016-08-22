#!/usr/bin/env node

var rollup = require('rollup');
var babel = require('babel-core');
var testTargets = process.argv.slice(2);

testTargets.forEach(function (target) {
  rollup.rollup({
    entry: target,
    onwarn: function () {}
  }).then(function (bundle) {
    var result = bundle.generate({
      format: 'cjs'
    });

    var transpiled = babel.transform(result.code, {
      presets: [
        'es2015',
      ]
    });

    process.stdout.write(transpiled.code);
    // console.log('resolved');
  });
});
