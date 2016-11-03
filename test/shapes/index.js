import { assert } from 'chai';
import * as jsdom from 'jsdom';
import { getRandomShape } from '../../src/shapes/index';

global.document = jsdom.jsdom('<html></html>');

describe('shapes', () => {
  describe('#getRandomShape', () => {
    it('should NOT generate the specified excluded shape type', () => {
      const excludedShapes = [
        'cross', 'crossDash', 'dotDash', 'weave', 'line',
        'line-vertical', 'zigzag', 'zigzag-vertical', 'diagonal',
        'diagnonal-right-left', 'square', 'disc', 'ring', 'triangle',
        'triangle-vertical', 'diamond', 'diamond-outline',
      ];
      let containsExcludedShape = false;
      let randomShapes = [];

      for (let i = 0; i < 30; i++) {
        randomShapes.push(getRandomShape(excludedShapes));
      }

      containsExcludedShape = randomShapes.some(shape => shape !== 'plus');

      assert.isNotOk(containsExcludedShape, 'an excluded shape was generated');
    });

    it('should NOT return a list that includes any deprecated patterns', () => {
      const deprecatedShapes = [
        'circle',
        'triangle-inverted',
        'line-horizontal',
        'line-diagonal-lr',
        'line-diagonal-rl',
        'zigzag-horizontal'
      ];
      let containsDeprecatedShapes = false;
      let randomShapes = [];

      for (let i = 0; i < 100; i++) {
        randomShapes.push(getRandomShape());
      }

      containsDeprecatedShapes = randomShapes.some(pattern => {
        return deprecatedShapes.indexOf(pattern) >= 0;
      });

      assert.isNotOk(containsDeprecatedShapes, 'a deprecated shape was generated');
    });
  });
});
