import test from 'tape';
import jsdom from 'jsdom';

import { square, circle } from '../src/shapes.js';

global.document = jsdom.jsdom('<html></html>')
global.window = global.document.defaultView;

test('square returns a canvas element of specified width and height', (t) => {
  t.plan(2);

  let testSquare = square(10);

  t.equal(testSquare instanceof window.HTMLCanvasElement, true);
  t.equal(testSquare.width, 10);
});

test('circle returns a canvas element of specified width and height', (t) => {
  t.plan(2);

  let testCircle = circle(10);

  t.equal(testCircle instanceof window.HTMLCanvasElement, true);
  t.equal(testCircle.width, 10);
});
