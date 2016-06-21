import test from 'tape';
import canvas from 'canvas';
import jsdom from 'jsdom';

import { square } from '../src/shapes.js';

test('square returns a canvas element', function (t) {
    t.plan(1);

    global.document = jsdom.jsdom('<html></html>')
    global.window = global.document.defaultView;

    let testSquare = square(10);

    t.equal(testSquare instanceof window.HTMLCanvasElement, true);
});
