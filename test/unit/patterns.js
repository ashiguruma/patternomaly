import test from 'tape';

import pattern from '../../src/patterns';

test('pattern returns a canvas pattern', (t) => {
  t.plan(1);

  let testPattern = pattern();

  t.equal(testPattern.toString(), '[object CanvasPattern]');
});
