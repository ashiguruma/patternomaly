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
