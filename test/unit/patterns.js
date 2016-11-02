var test = require('tape');
var pattern = require('../../');
var jsdom = require('jsdom');

global.document = jsdom.jsdom('<html></html>');

var COLORS = [
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
];

function generateColors (total) {
  var colorsList = COLORS.slice(0);
  var colorsTotal = total / COLORS.length;
  var i;

  for (i = 1; i < colorsTotal; i++) {
    Array.prototype.push.apply(colorsList, COLORS);
  }

  return colorsList;
}

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

  var colorsList = generateColors(100);
  var testPatterns = pattern.generate(colorsList);
  var hasContiguousPatterns = false;

  // TODO there is no guanrantee this test will fail even when it should
  // this requires mocking the available shape list. Try again using ES2015
  // for tests perhaps switching to Mocha
  hasContiguousPatterns = testPatterns.some(function (pattern, index) {
    if (index === 0) {
      return testPatterns[testPatterns.length-1].shapeType === pattern.shapeType;
    } else {
      return testPatterns[index-1].shapeType === pattern.shapeType;
    }
  });

  t.notOk(hasContiguousPatterns);
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
  var containsDeprecatedShapes = false;
  var colorsList, testPatterns;

  colorsList = generateColors(100);

  testPatterns = pattern.generate(colorsList);

  containsDeprecatedShapes = testPatterns.some(function (pattern) {
    return deprecatedShapes.indexOf(pattern.shapeType) >= 0;
  });

  t.notOk(containsDeprecatedShapes);
});
