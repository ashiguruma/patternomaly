import test from 'tape';
import jsdom from 'jsdom';

import {
  square,
  circle,
  diamond
} from '../src/shapes.js';

global.document = jsdom.jsdom('<html></html>');

test('square returns a canvas element of specified width and height', (t) => {
  t.plan(2);

  let testSquare = square(10);

  t.equal(testSquare.toString(), '[object HTMLCanvasElement]');
  t.equal(testSquare.width, 10);
});

test('circle returns a canvas element of specified width and height', (t) => {
  t.plan(2);

  let testCircle = circle(10);

  t.equal(testCircle.toString(), '[object HTMLCanvasElement]');
  t.equal(testCircle.width, 10);
});

test('diamond returns a canvas element of specified width and height', (t) => {
  t.plan(2);

  let testDiamond = diamond(10);

  t.equal(testDiamond.toString(), '[object HTMLCanvasElement]');
  t.equal(testDiamond.width, 10);
});
