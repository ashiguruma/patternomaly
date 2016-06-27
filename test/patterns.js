import test from 'tape';
import jsdom from 'jsdom';

import pattern from '../src/patterns';

global.document = jsdom.jsdom('<html></html>');
global.window = global.document.defaultView;

test('pattern returns a canvas context', (t) => {
  t.plan(1);

  let testPattern = pattern();

  t.equal(testPattern.toString(), '[object CanvasPattern]');
});
