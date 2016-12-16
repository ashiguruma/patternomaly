import { expect } from 'chai';
import * as jsdom from 'jsdom';
import Shape from '../../src/shapes/shape';

global.document = jsdom.jsdom('<html></html>');

describe('shape', () => {
  it('should create a canvas with the secified size', () => {
    const shape = new Shape(40);

    expect(shape._canvas.width).to.eql(40);
  });

  it('should use a default size of `20` if no size is specifed', () => {
    const shape = new Shape();

    expect(shape._canvas.width).to.eql(20);
  });
});
