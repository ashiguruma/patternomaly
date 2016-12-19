import { assert, expect } from 'chai';
import * as jsdom from 'jsdom';
import * as pattern from '../src/patterns.js';

global.document = jsdom.jsdom('<html></html>');

const COLORS = [
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
  const colorsList = COLORS.slice(0);
  const colorsTotal = total / COLORS.length;

  for (let i = 1; i < colorsTotal; i++) {
    Array.prototype.push.apply(colorsList, COLORS);
  }

  return colorsList;
}

describe('pattern', () => {

  describe('#draw', () => {
    it('should return a canvas pattern', () => {
      const testPattern = pattern.draw();

      expect(testPattern.toString()).to.equal('[object CanvasPattern]');
    });
  });

  describe('#generate', () => {
    it('should return a list of canvas patterns', () => {
      const colorList = [
        '#ff6384',
        '#36a2eb'
      ];

      const testPatterns = pattern.generate(colorList);

      assert(Array.isArray(testPatterns));
      expect(testPatterns.length).to.equal(2);
      expect(testPatterns[0].toString()).to.equal('[object CanvasPattern]');
      expect(testPatterns[1].toString()).to.equal('[object CanvasPattern]');
    });

    it('should NOT generate contiguous patterns of the same type', () => {
      const colorList = generateColors(100);
      const testPatterns = pattern.generate(colorList);
      let hasContiguous = false;

      hasContiguous = testPatterns.some((pattern, index, patterns) => {
        if (index === 0) {
          return pattern.shapeType === patterns[patterns.length - 1].shapeType;
        } else {
          return pattern.shapeType === patterns[index - 1].shapeType;
        }
      });

      assert.isNotOk(hasContiguous, 'the same shape was generated twice');
    });
  });
});
