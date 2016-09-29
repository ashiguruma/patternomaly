var test = require('tape');
var pattern = require('../../');
var jsdom = require('jsdom');

global.document = jsdom.jsdom('<html></html>');

test('pattern returns a canvas pattern', function (t) {
  t.plan(1);

  var testPattern = pattern.draw();

  t.equal(testPattern.toString(), '[object CanvasPattern]');
});

test('generate returns a list of canvas patterns', function (t) {
  t.plan(4);

  var colorList = [
    '#ff6384',
    '#36a2eb'
  ];
  var testPatterns;

  testPatterns = pattern.generate(colorList);

  t.ok(Array.isArray(testPatterns));
  t.equal(testPatterns.length, 2);
  t.equal(testPatterns[0].toString(), '[object CanvasPattern]');
  t.equal(testPatterns[1].toString(), '[object CanvasPattern]');
});

test('a pattern type should not be contiguous', function(t) {
  t.plan(1);

  var colorList = [
    '#1f77b4',
    '#e377c2',
    '#ff7f0e',
    '#2ca02c',
    '#bcbd22',
    '#d62728',
    '#17becf',
    '#9467bd',
    '#7f7f7f',
    '#8c564b',
    '#3366cc'
  ];
  var testPatterns = pattern.generate(colorList);
  var notContiguous = true;

  testPatterns.forEach(function (pattern, index) {
    if (index !== 0) {
      notContiguous = testPatterns[index-1].shapeType !== pattern.shapeType;
    }
  });

  t.ok(notContiguous);
});

test('deprecated patterns should NOT be included in random selection', function (t) {
  t.plan(1);

  var deprecatedShapes = [
    'circle',
    'triangle-inverted',
    'line-horizontal',
    'line-diagonal-lr',
    'line-diagonal-rl',
    'zigzag-horizontal'
  ];
  var colorList = [];
  var containsDeprecatedShapes = false;
  var testPatterns, i;

  // for 100+ colors (10 colors 10 times)
  for (i = 0; i < 10; i++) {
    colorList.push(
      '#1f77b4',
      '#e377c2',
      '#ff7f0e',
      '#2ca02c',
      '#bcbd22',
      '#d62728',
      '#17becf',
      '#9467bd',
      '#7f7f7f',
      '#8c564b'
    );
  }

  testPatterns = pattern.generate(colorList);

  containsDeprecatedShapes = testPatterns.some(function (pattern) {
    return deprecatedShapes.indexOf(pattern.shapeType) >= 0;
  });

  t.notOk(containsDeprecatedShapes);
});
