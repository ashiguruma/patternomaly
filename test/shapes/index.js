import { assert } from 'chai';
import * as jsdom from 'jsdom';
import { getRandomShape } from '../../src/shapes/index';
import { shapes, deprecatedShapes } from '../../src/shapes/shapes-list';

global.document = jsdom.jsdom('<html></html>');

describe('shapes', () => {
  describe('#getRandomShape', () => {
    it('should NOT generate the specified excluded shape types', () => {
      const randomShapes = [];
      const excludedShapes = Object.keys(shapes);
      const removedShape = excludedShapes.splice(0, 1)[0];
      let containsExcludedShape = false;

      for (let i = 0; i < 30; i++) {
        randomShapes.push(getRandomShape(excludedShapes));
      }

      containsExcludedShape = randomShapes.some(shape => shape !== removedShape);

      assert.isNotOk(containsExcludedShape, 'an excluded shape was generated');
    });

    it('should NOT return a list that includes any deprecated patterns', () => {
      const deprecatedShapesList = Object.keys(deprecatedShapes);
      const randomShapes = [];
      let containsDeprecatedShapes = false;

      for (let i = 0; i < 30; i++) {
        randomShapes.push(getRandomShape());
      }

      containsDeprecatedShapes = randomShapes.some(pattern => {
        return deprecatedShapesList.indexOf(pattern) >= 0;
      });

      assert.isNotOk(containsDeprecatedShapes, 'a deprecated shape was generated');
    });
  });
});
