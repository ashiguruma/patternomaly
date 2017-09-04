import { shapes, deprecatedShapes } from './shapes-list';

const completeShapesList = [];

export function getRandomShape(excludedShapeTypes = []) {
  const shapesList = Object.keys(shapes);

  excludedShapeTypes.forEach(shapeType => {
    shapesList.splice(shapesList.indexOf(shapeType), 1);
  });

  const randomIndex = Math.floor(Math.random() * shapesList.length);

  return shapesList[randomIndex];
}

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

Object.assign(completeShapesList, shapes, deprecatedShapes);

export default completeShapesList;
