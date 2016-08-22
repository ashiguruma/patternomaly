var test = require('tape');
var pattern = require('../../');
var jsdom = require('jsdom');

global.document = jsdom.jsdom('<html></html>');

test('pattern returns a canvas pattern', function (t) {
  t.plan(1);

  var testPattern = pattern.draw();

  t.equal(testPattern.toString(), '[object CanvasPattern]');
});
