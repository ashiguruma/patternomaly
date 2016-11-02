import plus from './plus';
import cross from './cross';
import crossDash from './cross-dash';
import dotDash from './dot-dash';
import weave from './weave';
import line from './line';
import lineVertical from './line-vertical';
import zigzag from './zigzag';
import zigzagVertical from './zigzag-vertical';
import diagonal from './diagonal';
import diagonalRightLeft from './diagonal-right-left';
import square from './square';
import disc from './disc';
import ring from './ring';
import triangle from './triangle';
import triangleVertical from './triangle-vertical';
import diamond from './diamond';
import diamondOutline from './diamond-outline';

const deprecatedShapes = [
  'circle',
  'triangle-inverted',
  'line-horizontal',
  'line-diagonal-lr',
  'line-diagonal-rl',
  'zigzag-horizontal'
];

const shapes = {
  'plus': plus,
  'cross': cross,
  'crossDash': crossDash,
  'dotDash': dotDash,
  'weave': weave,
  'line': line,
  'line-vertical': lineVertical,
  'zigzag': zigzag,
  'zigzag-vertical': zigzagVertical,
  'diagonal': diagonal,
  'diagnonal-right-left': diagonalRightLeft,
  'square': square,
  'disc': disc,
  'ring': ring,
  'triangle': triangle,
  'triangle-vertical': triangleVertical,
  'diamond': diamond,
  'diamond-outline': diamondOutline,
  // deprecated shape names
  'circle': disc,
  'triangle-inverted': triangleVertical,
  'line-horizontal': line,
  'line-diagonal-lr': diagonal,
  'line-diagonal-rl': diagonalRightLeft,
  'zigzag-horizontal': zigzag
};

export function getRandomShape(excludedShapeTypes) {
  let shapesList = Object.keys(shapes);

  shapesList = shapesList.filter((shape) => {
    if (deprecatedShapes.indexOf(shape) === -1) {
      return shape;
    }
  });

  excludedShapeTypes.forEach(shapeType => {
    shapesList.splice(shapesList.indexOf(shapeType), 1);
  });

  const randomIndex = Math.floor(Math.random() * shapesList.length);

  return shapesList[randomIndex];
}

export default shapes;
